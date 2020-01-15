class CourseSerializer
  include FastJsonapi::ObjectSerializer
  has_many :career_paths
  has_many :career_paths, through: :career_path_courses
  
  attributes :title, :url
end
