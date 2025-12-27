Rails.application.routes.draw do
  # Web Components Demo
  root 'home#index'

  # Health check
  get 'up' => 'rails/health#show', as: :rails_health_check
end
