class Page < ActiveRecord::Base
  belongs_to :subject
  belongs_to :user
  translates :name
end
