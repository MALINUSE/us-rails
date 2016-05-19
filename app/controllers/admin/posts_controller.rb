class Admin::PostsController < Admin::ApplicationController
  before_action :set_post, only: [:edit, :update]

  def index
    if current_user.role == "superAdmin"
      @posts = Post.all
    else
      @posts = current_user.posts.all
    end
  end

  def show
  end

  def new
    @post = current_user.posts.build
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def set_post
    @post= Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end

end
