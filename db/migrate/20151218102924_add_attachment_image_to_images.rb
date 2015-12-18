class AddAttachmentImageToImages < ActiveRecord::Migration
  def self.up
    change_table :images do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :images, :image
  end
endrails g model image and rails generate paperclip image image