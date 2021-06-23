Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root to: redirect('/events')

  # site controller is the root of our new project
  root 'site#index'

  # organize react router routes
  # we are informing Rails about the routes we will be using in our React application

  get 'events', to: 'site#index'
  get 'events/new', to: 'site#index'
  get 'events/:id', to: 'site#index'
  get 'events/:id/edit', to: 'site#index'

  # The routing for the controller has to consider the fact that it’s within the Api namespace.
  # We use the namespace method to fix up the routes in config/routes.rb.
  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
