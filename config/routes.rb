Rails.application.routes.draw do
  mount Mercury::Engine => '/'
  resources :pages do
    member { post :mercury_update }
  end
  #get 'pages/:id' => 'pages#show', as: :pages
  resources :links
  devise_for :users
  resources :comments
  resources :categories
  resources :posts
  get 'welcomes/home'
  root 'welcomes#home'

end
