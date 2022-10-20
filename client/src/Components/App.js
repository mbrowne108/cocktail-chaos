import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar.js'
import Cocktails from './Cocktails/Cocktails.js'

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
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          exact path="/"
          element={cocktails.length ? <Cocktails cocktails={cocktails} ingredients={ingredients} onDeleteCocktail={onDeleteCocktail} /> : null}  
        />
      </Routes>
    </div>
  );
}

export default App;
