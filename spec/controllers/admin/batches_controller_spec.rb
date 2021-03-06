# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::BatchesController, type: :controller do
  context 'signed in as admin' do
    let(:admin_user) { FactoryBot.create(:admin_user, council: property.council) }
    let(:property) { FactoryBot.create(:property_with_rates) }

    before { sign_in admin_user }

    describe '#index' do
      let!(:batched_form) { FactoryBot.create(:batched_form, property: property) }

      it 'assigns all batches to @batches' do
        get :index
        expect(assigns(:batches)).to eq([batched_form.batch].to_json(include: [:rebate_forms]))
        expect(response.status).to eq(200)
      end
    end

    describe '#create' do
      context 'when the user council is the same as the rebate forms' do
        let!(:rebate_forms) { FactoryBot.create_list(:processed_form, 3, property: property) }

        it 'creates a batch' do
          expect(Batch.count).to eq 0
          post :create, params: { ids: rebate_forms.map(&:id) }
          expect(Batch.count).to eq 1
          expect(RebateForm.first.batch_id).to eq Batch.first.id
          expect(RebateForm.second.batch_id).to eq Batch.first.id
          expect(RebateForm.third.batch_id).to eq Batch.first.id
        end
      end

      context 'when the user council is not the same as the rebate forms' do
        let(:admin_user) { FactoryBot.create(:admin_user, council: FactoryBot.create(:council)) }
        let!(:rebate_forms) { FactoryBot.create_list(:processed_form, 3, property: property) }

        it 'does not create a batch' do
          expect do
            post :create, params: { ids: rebate_forms.map(&:id) }
          end.to raise_error(ActiveRecord::RecordInvalid)
        end
      end
    end

    describe '#show' do
      context 'pdf' do
        let(:batched_form) { FactoryBot.create(:batched_form, property: property) }
        before { get :show, params: { id: batched_form.batch.to_param } }

        it { expect(assigns(:batch)).to eq(batched_form.batch) }
      end
    end

    describe '#update' do
      let!(:batched_form) { FactoryBot.create(:batched_form, property: property) }

      it 'updates a batch' do
        expect(Batch.first.name).to eq "TEMP-BATCH-ID##{batched_form.batch_id}"
        patch :update, params: { id: batched_form.batch_id, batch: { name: 'This is the 23rd new name' } }
        expect(Batch.first.name).to eq 'This is the 23rd new name'
      end

      context 'when an eRMS cover sheet is uploaded' do
        it 'updates the batch accordingly' do
          expect(Batch.first.download_link).to eq nil
          file = fixture_file_upload(Rails.root.join('spec', 'support', 'files', 'print-logo-black.png'), 'image/png')
          patch :update, params: { id: batched_form.batch_id,
                                   batch: { header_sheet: file } }
          expect(Batch.first.erms_header_sheet_attached?).to eq true
          expect(Batch.first.header_sheet_attached).to eq true
          expect(Batch.first.download_link).to_not eq nil
          expect(Batch.first.header_sheet).to be_an_instance_of(ActiveStorage::Attached::One)
        end
      end
    end
  end
end
