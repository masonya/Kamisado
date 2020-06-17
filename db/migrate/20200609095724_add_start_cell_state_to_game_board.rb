class AddStartCellStateToGameBoard < ActiveRecord::Migration[6.0]
  def change
    add_column :game_boards, :start_cell_state, :integer
  end
end
