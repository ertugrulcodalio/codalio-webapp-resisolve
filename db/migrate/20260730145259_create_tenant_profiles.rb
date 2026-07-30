class CreateTenantProfiles < ActiveRecord::Migration[7.2]
  def change
    create_table :tenant_profiles do |t|
      t.date :lease_start_date, null: false
      t.date :lease_end_date, null: false
      t.references :user, null: false, foreign_key: true
      t.references :unit, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
