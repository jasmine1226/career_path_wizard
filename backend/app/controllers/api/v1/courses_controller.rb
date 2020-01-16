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
end
