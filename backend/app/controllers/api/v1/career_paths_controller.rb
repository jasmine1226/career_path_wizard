class Api::V1::CareerPathsController < ApplicationController
  def index
    career_paths = CareerPath.all
    render json: CareerPathSerializer.new(career_paths)
  end

  def show
    career_path = CareerPath.find(params[:id])
      
    options = {}
    options[:include] = [:courses, :'courses.title', :'courses.url']
    render json: CareerPathSerializer.new(career_path, options).serializable_hash
  end
end
