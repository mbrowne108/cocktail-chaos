import React, { useState } from 'react';
import IngredientCard from './IngredientCard.js'
// import NewRecipeForm from './NewRecipeForm.js'


function Ingredients({ ingredients, ingredientColor, onUpdateIngredient, onDeleteIngredient }) {
    const [searchValue, setSearchValue] = useState('')

    function handleSearch(e) {
        setSearchValue(e.target.value)
    }

    const searchedIngredients = ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(searchValue.toLowerCase()))


    return (
        <div className='container'>
            <br/>
            <input type="search" className="form-control rounded" placeholder="Search..." value={searchValue} onChange={handleSearch}/>
            <br/>
            <div className="list-group">
            {searchedIngredients.map((ingredient) => 
                <IngredientCard 
                    key={ingredient.id} 
                    ingredient={ingredient}
                    ingredientColor={ingredientColor} 
                    onUpdateIngredient={onUpdateIngredient}
                    onDeleteIngredient={onDeleteIngredient} 
                />)}
            </div>
            <br/>
            {/* <div className="container text-center"> 
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ing-form-modal">Add New Item</button>
            </div>
            <br/>
            <div className='modal fade' id="ing-form-modal">
            <NewIngredientForm ingredients={ingredients} onNewIngredient={onNewIngredient} />
            </div>   */}
        </div>
    );
}

export default Ingredients;
