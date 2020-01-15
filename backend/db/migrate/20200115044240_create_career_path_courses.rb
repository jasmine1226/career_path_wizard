class CreateCareerPathCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :career_path_courses do |t|
      t.belongs_to :career_path
      t.belongs_to :course
      t.timestamps
    end
  end
end
