# frozen_string_literal: true

require 'rails_helper'

RSpec.describe RebateFormsUpdateService do
  let!(:property) { FactoryBot.create(:property_with_rates) }

  describe 'existing rebate form' do
    subject { described_class.new(update_params) }
    let!(:property2) { FactoryBot.create(:property_with_rates) }
    let!(:rebate_form) { FactoryBot.create(:rebate_form, valuation_id: property.valuation_id, property: property) }
    let(:update_params) do
      {
        'id' => rebate_form.id,
        'total_rates' => '12345',
        'location' => property2.location,
        'fields' => {
          'full_name' => 'Best Witch',
          'customer_id' => '12345',
          'phone' => '022123-4567',
          'email' => 'hermione.granger@potterworld.com',
          'has_partner' => 'true',
          'dependants' => '3',
          'occupation' => 'witch',
          '50_percent_claimed' => 'true',
          'income' => {}
        }
      }
    end

    describe '#update!' do
      context 'with valid params' do
        it 'updates a rebate form' do
          subject.update!
          expect(RebateForm.first.fields['full_name']).to eq 'Best Witch'
          expect(RebateForm.first.fields['email']).to eq 'hermione.granger@potterworld.com'
          expect(RebateForm.first.fields['dependants']).to eq '3'
          expect(RebateForm.first.location).to eq property2.location
          expect(RebateForm.first.total_rates).to eq 12_345
        end

        context 'without a valuation id' do
          let(:update_params) do
            {
              'id' => rebate_form.id,
              'total_rates' => '12345',
              'location' => property2.location,
              'council' => property2.council.name,
              'rebate_form' => {
                'fields' => {
                  'full_name' => 'Best Witch',
                  'customer_id' => '12345',
                  'phone' => '022123-4567',
                  'email' => 'hermione.granger@potterworld.com',
                  'has_partner' => 'true',
                  'dependants' => '3',
                  'occupation' => 'witch',
                  '50_percent_claimed' => 'true',
                  'income' => {}
                }
              }
            }
          end

          it 'finds the correct property and updates the rebate form accordingly' do
            expect(RebateForm.first.property).to eq property
            subject.update!
            expect(RebateForm.first.location).to eq property2.location
          end
        end

        context 'when it receives an address that doesn\'t belong to an existing property' do
          let(:update_params) do
            {
              'id' => rebate_form.id,
              'total_rates' => '12345',
              'location' => 'This is a different address than property2',
              'council' => property2.council.name,
              'rebate_form' => {
                'fields' => {
                  'full_name' => 'Best Witch',
                  'customer_id' => '12345',
                  'phone' => '022123-4567',
                  'email' => 'hermione.granger@potterworld.com',
                  'has_partner' => 'true',
                  'dependants' => '3',
                  'occupation' => 'witch',
                  '50_percent_claimed' => 'true',
                  'income' => {}
                }
              }
            }
          end

          it 'updates the rebate form but does not a new property object' do
            expect(Property.count).to eq 2
            subject.update!
            expect(Property.count).to eq 2
            expect(RebateForm.first.location).to eq 'This is a different address than property2'
          end
        end

        context 'when it receives an address that is slightly different than that of an existing property' do
          # property2 address is '999 Lambton quay'
          let(:update_params) do
            {
              'id' => rebate_form.id,
              'total_rates' => '12345',
              'location' => '999 Lambton Quay',
              'council' => property2.council.name,
              'rebate_form' => {
                'fields' => {
                  'full_name' => 'Best Witch',
                  'customer_id' => '12345',
                  'phone' => '022123-4567',
                  'email' => 'hermione.granger@potterworld.com',
                  'has_partner' => 'true',
                  'dependants' => '3',
                  'occupation' => 'witch',
                  '50_percent_claimed' => 'true',
                  'income' => {}
                }
              }
            }
          end

          it 'updates the rebate form but does not create a new property object' do
            expect(Property.count).to eq 2
            subject.update!
            expect(Property.count).to eq 2
            expect(RebateForm.first.location).to eq '999 Lambton Quay'
          end
        end

        context 'when the rebate form is signed with signatures attached' do
          let!(:rebate_form) do
            FactoryBot.create(:signed_form, valuation_id: property.valuation_id, property: property, status: RebateForm::SIGNED_STATUS)
          end

          let(:update_params) do
            {
              'id' => rebate_form.id,
              'total_rates' => '12345',
              'location' => '999 Lambton Quay',
              'council' => property2.council.name,
              'rebate_form' => {
                'fields' => {
                  'full_name' => 'Best Witch',
                  'customer_id' => '12345',
                  'phone' => '022123-4567',
                  'email' => 'hermione.granger@potterworld.com',
                  'has_partner' => 'true',
                  'dependants' => '3',
                  'occupation' => 'witch',
                  '50_percent_claimed' => 'true',
                  'income' => {}
                }
              }
            }
          end

          it 'removes the signatures and sets status to not signed' do
            expect(RebateForm.first.status).to eq RebateForm::SIGNED_STATUS
            expect(RebateForm.first.signatures).to_not be_empty
            subject.update!
            expect(RebateForm.first.status).to eq RebateForm::NOT_SIGNED_STATUS
            expect(RebateForm.first.signatures).to be_empty
          end
        end
      end
    end
  end
end
