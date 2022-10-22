import React, { useState } from 'react';
import IngredientCard from './IngredientCard.js'
import NewIngredientForm from './NewIngredientForm.js'


function Ingredients({ ingredients, ingredientColor, onNewIngredient, onUpdateIngredient, onDeleteIngredient }) {
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
            <div className="container text-center"> 
                <button className="btn btn-lg btn-outline-primary col-12 fa fa-plus" data-bs-toggle="modal" data-bs-target="#ing-form-modal"></button>
            </div>
            <div className='modal fade' id="ing-form-modal">
                <NewIngredientForm ingredients={ingredients} onNewIngredient={onNewIngredient} />
            </div>  
        </div>
    );
}

export default Ingredients;
