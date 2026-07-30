class CreateBuildings < ActiveRecord::Migration[7.2]
  def change
    create_table :buildings do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
