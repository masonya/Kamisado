Rails.application.routes.draw do


  namespace :api, format: :json do
    resources :monks
    get 'welcom/index'
  end

get 'welcom/index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
