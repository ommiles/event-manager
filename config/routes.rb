Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # The routing for the controller has to consider the fact that it’s within the Api namespace.
  # We use the namespace method to fix up the routes in config/routes.rb.
  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
