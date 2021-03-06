# frozen_string_literal: true

require 'rails_helper'

RSpec.describe RebateFormsService do
  let!(:property) { FactoryBot.create(:property_with_rates) }

  describe 'new rebate form' do
    subject { described_class.new(create_params) }
    let(:create_params) do
      {
        'total_rates' => '12345',
        'location' => property.location,
        'council' => property.council.name,
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

    describe '#create!' do
      context 'with invalid params' do
        let(:create_params) do
          {
            'total_rates' => '12345',
            'rebate_form' => {
              'fields' => {}
            }
          }
        end

        it 'raises an error' do
          expect { subject.create! }.to raise_error(ActiveRecord::RecordNotFound)
        end
      end

      context 'with valid params' do
        it 'creates a new rebate form' do
          subject.create!
          expect(RebateForm.count).to eq 1
          expect(RebateForm.first.location).to eq property.location
          expect(RebateForm.first.total_rates).to eq property.rates_bills.first.total_rates
        end
      end
    end
  end
end
