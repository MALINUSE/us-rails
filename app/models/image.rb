class Image < ActiveRecord::Base
  has_attached_file :image, styles: {
  news: "160x90>", single_news: "750x300>",
  slider: "1140x350>", galery: "1024x576"
  },
  default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
