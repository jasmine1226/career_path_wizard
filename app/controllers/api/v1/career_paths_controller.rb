class Api::V1::CareerPathsController < ApplicationController
  def index
    @career_paths = CareerPath.all

    render json: @career_paths, status: 200
  end
end
