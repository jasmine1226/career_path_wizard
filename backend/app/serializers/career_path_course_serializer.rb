class CareerPathCourseSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :career_path
  belongs_to :course
  attributes :career_path, :location
end
