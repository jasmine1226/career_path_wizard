class Api::V1::CoursesController < ApplicationController
  def index
    if params[:career_path_id]
      courses = CareerPath.find(params[:career_path_id]).courses
    else
      courses = Course.all
    end
    render json: CourseSerializer.new(courses)
  end

  def show
    course = Course.find(params[:id])
    render json: CourseSerializer.new(course)
  end

  def create
    # if params[:career_path_id] do this else do that; use nested form
    course = Course.create(course_params)
    render json: CourseSerializer.new(course)
  end

  private
  def course_params
    params.require(:course).permit(:title, :url, :career_path_id)
  end
end
