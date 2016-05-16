class WelcomeController < ApplicationController

  layout "public"

  def home
    @sliders = Slider.all

  end

  def show
  end

end
