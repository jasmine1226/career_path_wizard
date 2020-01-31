class CareerPathSerializer
  include FastJsonapi::ObjectSerializer
  has_many :courses
  has_many :courses, through: :career_path_courses
  
  attributes :name
end
