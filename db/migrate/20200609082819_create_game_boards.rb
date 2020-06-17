class CreateGameBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :game_boards do |t|
      t.string :cells_state, default: nil

      t.timestamps
    end
  end
end
