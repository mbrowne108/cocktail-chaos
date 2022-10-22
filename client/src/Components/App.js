import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar.js'
import Cocktails from './Cocktails/Cocktails.js'
import Ingredients from './Ingredients/Ingredients.js'

function App() {
  const [cocktails, setCocktails] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch('/cocktails').then(r => {
      if (r.ok) {
        r.json().then(data => setCocktails(data))
      }
    })
  }, []);

  useEffect(() => {
    fetch('/ingredients').then(r => {
      if (r.ok) {
        r.json().then(data => setIngredients(data))
      }
    })
  }, []);

  function onDeleteCocktail(deletedCocktail) {
    const updatedCocktails = cocktails.filter((cocktail) => cocktail.id !== deletedCocktail.id)
    setCocktails(updatedCocktails)
  }

  function onNewIngredient(newIngredient) {
    const newIngredientArray = [...ingredients, newIngredient]
    setIngredients(newIngredientArray)
    alert(`${newIngredient.name} has been added to your pantry`)
  }

  function onNewCocktail(newCocktail) {
    const newCocktailArray = [...cocktails, newCocktail]
    setCocktails(newCocktailArray)
    alert(`${newCocktail.name} has been added to your pantry`)
  }

  function onUpdateIngredient(updatedIngredient) {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === updatedIngredient.id) {
        return updatedIngredient
      } else {
        return ingredient
      }
    })
    setIngredients(updatedIngredients)
  }

  function onDeleteIngredient(deletedIngredient) {
    const updatedIngredients = ingredients.filter((ingredient) => ingredient.id !== deletedIngredient.id)
    setIngredients(updatedIngredients)
  }

  function ingredientColor(ingredient) {
    if (ingredient.instock) {
      return 'success'
    } else {
      return 'danger'
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="container rounded p-3 my-2 border bg-light text-center">
          <h1 className='display-1'>Cocktail Chaos</h1>
        </div>
      </header>
      <NavBar />
      <Routes>
        <Route
          exact path="/ingredients"
          element={
            cocktails.length ? 
              <Ingredients 
                ingredients={ingredients} 
                ingredientColor={ingredientColor}
                onNewIngredient={onNewIngredient}
                onUpdateIngredient={onUpdateIngredient}
                onDeleteIngredient={onDeleteIngredient} 
              /> : 
            null}  
        />
        <Route
          exact path="/cocktails"
          element={
            cocktails.length ? 
              <Cocktails 
                cocktails={cocktails} 
                ingredients={ingredients}
                ingredientColor={ingredientColor}
                onNewCocktail={onNewCocktail}
                onDeleteCocktail={onDeleteCocktail} 
              /> : 
            null}  
        />
        
      </Routes>
    </div>
  );
}

export default App;
