class AddSupplyToIngredients < ActiveRecord::Migration[7.0]
  def change
    add_column :ingredients, :supply, :integer
  end
end
