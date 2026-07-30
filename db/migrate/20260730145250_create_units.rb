class CreateUnits < ActiveRecord::Migration[7.2]
  def change
    create_table :units do |t|
      t.string :number, null: false
      t.references :building, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
