# frozen_string_literal: true

class GenerateQrService
  def initialize(rebate_form, witness)
    raise ArgumentError 'rebate_form must be saved to the database' if rebate_form.id.nil?
    raise ArgumentError 'witness must not be blank' if witness.blank?

    @rebate_form = rebate_form
    @witness = witness
  end

  def generate_qr
    # iPad-application URL
    url = signing_url
    Rails.logger.info('the ipad signing url is:' + url) # for easier debugging in production
    qr_code(url)
  end

  private

  # create a new token that only allows you to fetch a restricted set of details for this application only
  # and use the same token to submit the signatures back
  # this token duration is configured by ENV['IPAD_JWT_LENGTH']
  def create_signing_token
    JwtService.new.create_signing_token(
      @rebate_form.id,
      witness: {
        name: @witness.name || '',
        location: @witness.council&.name || '',
        occupation: 'Authorised Council Officer'
      }
    )
  end

  def qr_code(url)
    RQRCode::QRCode
      .new(url, size: 20, level: :h)
      .as_png(offset: 0, color: '0', shape_rendering: 'crispEdges', module_size: 10)
      .to_data_url
  end

  def signing_url
    "#{ENV['APP_URL']}ipad/?t=#{create_signing_token}"
  end
end
