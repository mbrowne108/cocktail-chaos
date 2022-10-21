import React, { useState } from 'react';
import CocktailCard from './CocktailCard.js'
// import NewRecipeForm from './NewRecipeForm.js'

function Cocktails({ cocktails, ingredients, onColorChange, onDeleteCocktail }) {
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('')

    function handleSearch(e) {
        setSearchValue(e.target.value)
    }
    function handleFilter(e) {
        console.log('add filter')
    }

    const searchedCocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div>
            <br/>
            <div className="container accordion" id="accordion">
                <div className='row'>
                    <input type="search" className="form-control rounded col-6" placeholder="Search..." value={searchValue} onChange={handleSearch}/>
                    <div className='dropdown col-6'>
                        <button type="button" className="btn btn-outline-primary dropdown-toggle col-12" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className='dropdown-menu col-12'>
                            <li className='form-check dropdown-item'>
                                {ingredients.map((ingredient) => {
                                    return (
                                        <div className='row col-12 text-center' key={ingredient.id}>
                                            <input className='form-check-input' type='checkbox' name={ingredient.name} value={ingredient.name} />
                                            <label className='form-check-label text-center'>{ingredient.name}</label>
                                        </div>
                                    )
                                })}
                            </li>
                        </ul>
                    </div>
                    {/* <input type="search" className="form-control rounded col-6" placeholder="Search..." value={filterValue} onChange={handleFilter}/> */}
                </div>
                <br/>
                {searchedCocktails.map((cocktail) => {
                    return <CocktailCard key={cocktail.id} cocktail={cocktail} onDeleteCocktail={onDeleteCocktail} />
                })}
            </div>
            {/* <br/>
            <div className="container text-center"> 
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rec-form-modal">Add New Recipe</button>
            </div>
            <br/>
            <div className='modal fade' id="rec-form-modal">
                <NewRecipeForm ingredients={ingredients} onNewRecipe={onNewRecipe} /> 
            </div> */}
        </div>
    );
}

export default Cocktails;
