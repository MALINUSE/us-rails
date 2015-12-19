class Page < ActiveRecord::Base
  validates_uniqueness_of :slug
  def to_param
    slug
  end
end
