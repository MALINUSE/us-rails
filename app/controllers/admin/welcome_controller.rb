class Admin::WelcomeController < Admin::ApplicationController
  def index
    if current_user.role == "superAdmin"
      @users_count = User.all.count
      @posts_count = Post.all.count
    else
      @users_count= nil
      @posts_count = current_user.posts.all.count
    end
  end
end
