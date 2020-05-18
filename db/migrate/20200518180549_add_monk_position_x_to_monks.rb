class AddMonkPositionXToMonks < ActiveRecord::Migration[6.0]
  def change
    add_column :monks, :monk_position_x, :integer
  end
end
