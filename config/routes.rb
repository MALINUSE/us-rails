Rails.application.routes.draw do
  root 'welcome#home'
  get 'contact' => 'contacts#new'
  #get 'show/:permalink', :to => 'welcome#show'
  get '/change_locale/:locale', to: 'settings#change_locale', as: :change_locale

  namespace :admin do
    get '/dashboard' => 'welcome#index'
    resources :posts, :categories, :comments, :admin_users
  end

  resources :categories, only: [:index, :show]
  resources :posts, only: [:index, :show]
  resources :comments, only: [:new]

  devise_for :users,
             controllers: {
                 registrations: 'users/registrations',
                 confirmations: 'users/confirmations',
                 sessions: 'users/sessions',
                 passwords: 'users/passwords'
             },
             path_names: {
                 sign_up: 'register',
                 sign_in: 'login',
                 sign_out: 'logout',
                 password: 'secret',
                 confirmation: 'verification',
                 unlock: 'unblock'
             }

end
