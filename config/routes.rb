Rails.application.routes.draw do
  devise_for :users, path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      password: 'secret',
      confirmation: 'verification',
      unlock: 'unblock',
      sign_up: 'register'
  }

  resources :links
  resources :comments
  resources :categories
  resources :posts
  resources :images
  get 'welcomes/home'
  root 'welcomes#home'
  get '/change_locale/:locale', to: 'settings#change_locale', as: :change_locale

end
