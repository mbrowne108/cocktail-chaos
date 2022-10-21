class RemoveSupplyColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :ingredients, :supply
  end
end
