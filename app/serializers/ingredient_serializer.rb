class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :cocktail_ingredients, serializer: IngredientCocktailSerializer
end
