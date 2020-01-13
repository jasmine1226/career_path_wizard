class Api::V1::CareerPathsController < ApplicationController
  def index
    career_paths = CareerPath.all
    render json: CareerPathSerializer.new(career_paths)
  end

  def show
    career_path = CareerPath.find(params[:id])
    render json: CareerPathSerializer.new(career_path)
  end
end
