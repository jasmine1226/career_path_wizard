class CreateCareerPaths < ActiveRecord::Migration[6.0]
  def change
    create_table :career_paths do |t|
      t.string :career_track
      t.timestamps
    end
  end
end
