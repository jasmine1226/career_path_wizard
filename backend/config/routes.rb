Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :career_paths do
        resources :courses
      end
      resources :courses
    end
  end
end
