class CreateSliders < ActiveRecord::Migration
  def change
    create_table :sliders do |t|
      t.string :name
      t.text :description
      t.attachment :image

      t.timestamps null: false
    end
  end
end
