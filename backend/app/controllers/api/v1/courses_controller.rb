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
<<<<<<< HEAD
    #if params[:career_path_id]
      career_path = CareerPath.find(params[:career_path_id])
      course = career_path.courses.create(course_params)
    #end
=======
    career_path = CareerPath.find(params[:career_path_id])
    course = career_path.courses.create(course_params)
>>>>>>> errorhandler
    render json: CourseSerializer.new(course)
    rescue ActiveRecord::RecordNotFound
      render json: {}, status: :not_found
  end

  private
  def course_params
    params.require(:course).permit(:title, :url)
  end
end
