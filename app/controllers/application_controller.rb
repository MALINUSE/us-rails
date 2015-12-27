class ApplicationController < ActionController::Base
  before_filter :getgalery
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def getgalery
    @images = Image.all
  end
end
