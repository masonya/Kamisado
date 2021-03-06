Rails.application.routes.draw do


  namespace :api, format: :json do
    get 'boards/index'
    # patch 'boards' => 'boards#update'

    resources :boards, only: [:show, :update, :create]

    resources :game_boards, only: [ :update, :create]
    get 'game_boards/index'

    resources :monks
    get 'welcom/index'
  end

mount ActionCable.server => '/cable'

get 'welcom/index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
