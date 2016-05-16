class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.references :page, index: true, foreign_key: true
      t.string :name
      t.integer :position
      t.boolean :visible
      t.string :content_type
      t.text :content
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
