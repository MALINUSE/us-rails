class CreateTranslationForPages < ActiveRecord::Migration
  def change
    create_table :translation_for_pages do |t|
      def up
        Page.create_translation_table!({
                                           name: :string
                                       }, {
                                           migrate_data: true
                                       })
      end

      def down
        Page.drop_translation_table! migrate_data: true
      end
    end
  end
end
