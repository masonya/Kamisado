class CreateWhites < ActiveRecord::Migration[6.0]
  def change
    create_table :whites do |t|

      t.timestamps
    end
  end
end
