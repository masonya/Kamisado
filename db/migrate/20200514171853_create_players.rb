class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.integer :player_id
      t.string :name

      t.timestamps
    end
  end
end
