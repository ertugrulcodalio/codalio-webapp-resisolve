class CreateMaintenanceComments < ActiveRecord::Migration[7.2]
  def change
    create_table :maintenance_comments do |t|
      t.text :body, null: false
      t.references :maintenance_request, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
