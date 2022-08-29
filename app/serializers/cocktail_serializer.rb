class CocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions
  has_many :cocktail_ingredients, serializer: CocktailIngredientSerializer
end
