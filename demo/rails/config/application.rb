require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module WebComponentsRailsDemo
  class Application < Rails::Application
    config.load_defaults 8.0

    # タイムゾーン設定
    config.time_zone = 'Tokyo'
    config.i18n.default_locale = :ja

    # セキュリティ設定
    config.autoload_lib(ignore: %w[assets tasks])
  end
end
