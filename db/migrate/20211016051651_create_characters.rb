class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.references :image, null: false, foreign_key: true
      t.string :name
      t.integer :x_location
      t.integer :y_location

      t.timestamps
    end
  end
end
