class Subject < ActiveRecord::Base
  belongs_to :user
  translates :name
end
