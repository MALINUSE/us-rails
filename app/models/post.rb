class Post < ActiveRecord::Base
  belongs_to :user
  translates :title, :body
end
