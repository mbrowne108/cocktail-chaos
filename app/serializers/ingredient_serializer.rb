class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :instock
  has_many :cocktail_ingredients, serializer: IngredientCocktailSerializer
end
