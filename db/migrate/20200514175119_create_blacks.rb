class CreateBlacks < ActiveRecord::Migration[6.0]
  def change
    create_table :blacks do |t|

      t.timestamps
    end
  end
end
