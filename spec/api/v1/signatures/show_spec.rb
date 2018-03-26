# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'signatures#show', type: :request do
  let(:params) { {} }

  subject(:make_request) do
    jsonapi_get "/api/v1/signatures/#{signature.id}",
                params: params
  end

  describe 'basic fetch' do
    let!(:signature) { create(:signature) }

    it 'serializes the resource correctly' do
      make_request
      assert_payload(:signature, signature, json_item)
    end
  end
end
