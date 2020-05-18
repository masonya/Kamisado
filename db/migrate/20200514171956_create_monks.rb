class CreateMonks < ActiveRecord::Migration[6.0]
  def change
    create_table :monks do |t|
      t.integer :monk_id
      t.string :type
      t.integer :player_id

      t.timestamps
    end
  end
end
