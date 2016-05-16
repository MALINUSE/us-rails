class CreateTranslationForPosts < ActiveRecord::Migration
  def change
    create_table :translation_for_posts do |t|
      def up
        Post.create_translation_table!({
                                           title: :string,
                                           body: :text
                                       }, {
                                           migrate_data: true
                                       })
      end

      def down
        Post.drop_translation_table! migrate_data: true
      end
    end
  end
end
