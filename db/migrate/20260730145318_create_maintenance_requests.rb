class CreateMaintenanceRequests < ActiveRecord::Migration[7.2]
  def change
    create_table :maintenance_requests do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :status, null: false, default: 0
      t.integer :severity, null: false, default: 0
      t.references :tenant_profile, null: false, foreign_key: true
      t.references :unit, null: false, foreign_key: true
      t.references :service_category, null: false, foreign_key: true
      t.references :technician_profile, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
