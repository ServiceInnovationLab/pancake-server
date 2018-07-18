# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::CouncilsController, type: :controller do
  let(:admin_user) { FactoryBot.create :admin_user }

  context 'signed in as admin' do
    before { sign_in admin_user }

    # This should return the minimal set of attributes required to create a valid
    # Council. As you add validations to Council, be sure to
    # adjust the attributes here as well.
    let(:valid_attributes) do
      { name: 'Tauranga', active: true }
    end

    let(:invalid_attributes) do
      skip('Add a hash of attributes invalid for your model')
    end

    # This should return the minimal set of values that should be in the session
    # in order to pass any filters (e.g. authentication) defined in
    # CouncilsController. Be sure to keep this updated too.
    let(:valid_session) { {} }

    describe 'GET #index' do
      it 'assigns all councils as @councils' do
        council = Council.create! valid_attributes
        get :index, params: {}, session: valid_session
        expect(assigns(:councils)).to eq([council])
      end
    end

    describe 'GET #show' do
      it 'assigns the requested council as @council' do
        council = Council.create! valid_attributes
        get :show, params: { id: council.to_param }, session: valid_session
        expect(assigns(:council)).to eq(council)
      end
    end

    describe 'GET #new' do
      it 'assigns a new council as @council' do
        get :new, params: {}, session: valid_session
        expect(assigns(:council)).to be_a_new(Council)
      end
    end

    describe 'GET #edit' do
      it 'assigns the requested council as @council' do
        council = Council.create! valid_attributes
        get :edit, params: { id: council.to_param }, session: valid_session
        expect(assigns(:council)).to eq(council)
      end
    end

    describe 'POST #create' do
      context 'with valid params' do
        it 'creates a new Council' do
          expect do
            post :create, params: { council: valid_attributes }, session: valid_session
          end.to change(Council, :count).by(1)
        end

        it 'assigns a newly created council as @council' do
          post :create, params: { council: valid_attributes }, session: valid_session
          expect(assigns(:council)).to be_a(Council)
          expect(assigns(:council)).to be_persisted
        end

        it 'redirects to the created council' do
          post :create, params: { council: valid_attributes }, session: valid_session
          expect(response).to redirect_to(admin_councils_path)
        end
      end

      context 'with invalid params' do
        it 'assigns a newly created but unsaved council as @council' do
          post :create, params: { council: invalid_attributes }, session: valid_session
          expect(assigns(:council)).to be_a_new(Council)
        end

        it "re-renders the 'new' template" do
          post :create, params: { council: invalid_attributes }, session: valid_session
          expect(response).to render_template('new')
        end
      end
    end

    describe 'PUT #update' do
      context 'with valid params' do
        let(:new_attributes) do
          skip('Add a hash of attributes valid for your model')
        end

        it 'updates the requested council' do
          council = Council.create! valid_attributes
          put :update, params: { id: council.to_param, council: new_attributes }, session: valid_session
          council.reload
          skip('Add assertions for updated state')
        end

        it 'assigns the requested council as @council' do
          council = Council.create! valid_attributes
          put :update, params: { id: council.to_param, council: valid_attributes }, session: valid_session
          expect(assigns(:council)).to eq(council)
        end

        it 'redirects to the council' do
          council = Council.create! valid_attributes
          put :update, params: { id: council.to_param, council: valid_attributes }, session: valid_session
          expect(response).to redirect_to(admin_councils_path)
        end
      end

      context 'with invalid params' do
        it 'assigns the council as @council' do
          council = Council.create! valid_attributes
          put :update, params: { id: council.to_param, council: invalid_attributes }, session: valid_session
          expect(assigns(:council)).to eq(council)
        end

        it "re-renders the 'edit' template" do
          council = Council.create! valid_attributes
          put :update, params: { id: council.to_param, council: invalid_attributes }, session: valid_session
          expect(response).to render_template('edit')
        end
      end
    end

    describe 'DELETE #destroy' do
      it 'destroys the requested council' do
        council = Council.create! valid_attributes
        expect do
          delete :destroy, params: { id: council.to_param }, session: valid_session
        end.to change(Council, :count).by(-1)
      end

      it 'redirects to the councils list' do
        council = Council.create! valid_attributes
        delete :destroy, params: { id: council.to_param }, session: valid_session
        expect(response).to redirect_to(admin_councils_url)
      end
    end
  end
end
