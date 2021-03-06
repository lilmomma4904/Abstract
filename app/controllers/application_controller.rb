class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :signed_in?, :current_user

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_in!(user)
    user.reset_session_token!

    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def signed_in?
    !!current_user
  end

  def require_signed_in!
    unless current_user
      render json: { base: ['Please sign in to continue'] }, status: 401
    end
  end
end
