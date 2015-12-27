class Page < ActiveRecord::Base
  translates :name, :content

  #validates_uniqueness_of :slug

  def to_param
    slug
  end
end
