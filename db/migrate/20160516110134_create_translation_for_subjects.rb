class CreateTranslationForSubjects < ActiveRecord::Migration
  def change
    create_table :translation_for_subjects do |t|
      def up
        Subject.create_translation_table!({
                                              name: :string
                                          }, {
                                              migrate_data: true
                                          })
      end

      def down
        Subject.drop_translation_table! migrate_data: true
      end
    end
  end
end
