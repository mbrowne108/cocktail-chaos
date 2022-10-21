class AddBooleanSupplyColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :ingredients, :instock, :boolean, null: false, default: true
  end
end
