class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.integer :b1X, default: 0
      t.integer :b1Y, default: 0
      t.integer :b1Position

      t.timestamps
    end
  end
end
