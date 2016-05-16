class CreateTranslationForSections < ActiveRecord::Migration
  def change
    create_table :translation_for_sections do |t|
      def up
        Section.create_translation_table!({
                                              name: :string,
                                              content: :text
                                          }, {
                                              migrate_data: true
                                          })
      end

      def down
        Section.drop_translation_table! migrate_data: true
      end
    end
  end
end
