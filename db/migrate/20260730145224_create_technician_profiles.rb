class CreateTechnicianProfiles < ActiveRecord::Migration[7.2]
  def change
    create_table :technician_profiles do |t|
      t.string :specialty, null: false
      t.references :user, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
