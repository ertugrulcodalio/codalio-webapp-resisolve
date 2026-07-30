class CreateServiceCategories < ActiveRecord::Migration[7.2]
  def change
    create_table :service_categories do |t|
      t.string :name, null: false
      t.integer :status, null: false, default: 0
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
