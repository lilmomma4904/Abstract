class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.img_url = 'default.png'

    if @user.save
      sign_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end

  def index
    @users = User.all
    render "api/users/index"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
