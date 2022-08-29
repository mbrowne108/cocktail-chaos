Cocktail.delete_all
Ingredient.delete_all
CocktailIngredient.delete_all

puts "Seeding Ingredients..."
gin = Ingredient.create!(name: "Gin")
tonic = Ingredient.create!(name: "Tonic Water")
vermouth = Ingredient.create!(name: "Vermouth")
lime = Ingredient.create!(name: "Lime Juice")
olive = Ingredient.create!(name: "Olive")

puts "Seeding Recipes..."
gintonic = Cocktail.create!(name: "Gin & Tonic", instructions: "Mix Gin with Tonic and add lime")
martini = Cocktail.create!(name: "Gin Martini", instructions: "Mix Gin with Vermouth and stir. Add olive.")

puts "Seeding join table..."
gtgin = CocktailIngredient.create!(cocktail: gintonic, ingredient: gin, measure: "2 oz.")
gttonic = CocktailIngredient.create!(cocktail: gintonic, ingredient: tonic, measure: "4 oz.")
gtlime = CocktailIngredient.create!(cocktail: gintonic, ingredient: lime, measure: "Splash")

martinigin = CocktailIngredient.create!(cocktail: martini, ingredient: gin, measure: "2.5 oz.")
martiniverm = CocktailIngredient.create!(cocktail: martini, ingredient: vermouth, measure: "0.5 oz.")
martiniolive = CocktailIngredient.create!(cocktail: martini, ingredient: olive, measure: "1")

puts "Seeding complete!"