class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
