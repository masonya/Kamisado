class Monk < ApplicationRecord
  belongs_to :player



  def collect_position_monks
    {
      id: id,
      monk_position_x: monk_position_x,
      monk_position_y: monk_position_y
    }
  end



end
