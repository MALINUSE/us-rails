class Admin::AdminUsersController < Admin::ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :check_user_super, only: [:index, :new, :create, :edit, :update, :destroy]

  def index
    if current_user.role == "superAdmin"
      @users = User.all
    else
      @users_count= nil
    end
  end

  def show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to admin_admin_users_path, notice: t('forms.messages.success') }
        format.json { render :index, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to admin_admin_users_path, notice: t('forms.messages.success') }
        format.json { render :index, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to admin_admin_users_path, notice: t('forms.messages.success') }
      format.json { head :no_content }
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :role)
  end

  def check_user_super
    if current_user.present?
      if current_user.role == "superAdmin"
      else
        redirect_to root_path, notice: "Access Denied!"
      end
    end
  end

end