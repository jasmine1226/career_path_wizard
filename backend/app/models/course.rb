class Course < ApplicationRecord
  has_many :career_path_courses
  has_many :career_paths, through: :career_path_courses
end
