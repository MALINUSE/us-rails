class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.references :subject, index: true, foreign_key: true
      t.string :name
      t.string :permalink
      t.integer :position
      t.boolean :visible
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
