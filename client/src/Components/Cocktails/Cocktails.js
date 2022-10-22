import React, { useState } from 'react';
import CocktailCard from './CocktailCard.js'
import NewCocktailForm from './NewCocktailForm.js'

function Cocktails({ cocktails, ingredients, ingredientColor, onNewCocktail, onDeleteCocktail }) {
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState([])

    function handleSearch(e) {
        setSearchValue(e.target.value)
    }
    function handleFilter(e) {
        if (e.target.checked) {
            setFilterValue([...filterValue, e.target.value])
        } else {
            setFilterValue(filterValue.filter(name => name !== e.target.name))
        }
    }

    const searchedCocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchValue.toLowerCase()))

    const filteredCocktails = []
    const includesAll = (arr, values) => values.every(v => arr.includes(v));

    searchedCocktails.map((cocktail) => {
        const ingr = []
        cocktail.cocktail_ingredients.map((ing) => {
            ingr.push(ing.ingredient.name)
        })
        if (includesAll(ingr, filterValue)) {
            if (!filteredCocktails.includes(cocktail)) filteredCocktails.push(cocktail)
        }
    })

    return (
        <div>
            <br/>
            <div className="container accordion" id="accordion">
                <div className='row'>
                    <input type="search" className="form-control rounded col-6" placeholder="Search..." value={searchValue} onChange={handleSearch}/>
                    <div className='dropdown col-6' onChange={handleFilter}>
                        <button type="button" className="btn btn-outline-primary dropdown-toggle col-12" data-bs-toggle="dropdown">Filter by Ingredient</button>
                        <ul className='dropdown-menu col-12'>
                            <li className='form-check-inline dropdown-item'>
                                {ingredients.map((ingredient) => {
                                    return (
                                        <div className='row col-12' key={ingredient.id}>
                                            <input className='form-check-input' type='checkbox' name={ingredient.name} value={ingredient.name} />
                                            <label className='form-check-label text-center'>{ingredient.name}</label>
                                        </div>
                                    )
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
                <br/>
                {filteredCocktails.map((cocktail) => {
                    return <CocktailCard 
                                key={cocktail.id} 
                                cocktail={cocktail} 
                                ingredientColor={ingredientColor} 
                                onDeleteCocktail={onDeleteCocktail} 
                            />
                })}
            </div>
            <div className="container text-center"> 
                <button className="btn btn-lg btn-outline-primary col-12 fa fa-plus" data-bs-toggle="modal" data-bs-target="#cocktail-form-modal"></button>
            </div>
            <div className='modal fade' id="cocktail-form-modal">
                <NewCocktailForm ingredients={ingredients} onNewCocktail={onNewCocktail} /> 
            </div>
        </div>
    );
}

export default Cocktails;
