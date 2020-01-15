class CareerPath < ApplicationRecord
  has_many :career_path_courses
  has_many :courses, through: :career_path_courses
end
