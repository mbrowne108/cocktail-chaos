import React, { useState } from 'react';

function CocktailCard({ cocktail, onDeleteCocktail }) {
    // const newInstructions = cocktail.instructions.replaceAll('\\n','\n')
    // const splitInstructions = newInstructions.split(/\r?\n/)
    // const measurements = recipe.measurements.replace('[','').replace(']','').replaceAll('"', '').split(', ')
    // const ingredients = recipe.ingredients.map((ing,i) => Object.assign(ing, {measurement: measurements[i]}))
    const [errors, setErrors] = useState([]);

    function handleDelete(e) {
        const result = window.confirm(`Are you sure you want to delete ${cocktail.name}?`)
        if (result) {
            fetch(`/cocktails/${cocktail.id}`, {
                method: "DELETE",
            })
            .then(r => {
                if (r.ok) {
                    r.json()
                    .then(() => onDeleteCocktail(cocktail))
                } else {
                    r.json().then(err => setErrors(err.errors))
                }
            })
        }
    }

    return (
        <div className='accordion-item'>
            <div className="card-header" type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#cocktail-details-${cocktail.id}`}
                    data-bs-parent="#accordion">
                <h3 className='accordion-button h3 text-center' >{cocktail.name} 
                </h3>
            </div>
            <div id={`cocktail-details-${cocktail.id}`} className='card-body accordion-collapse collapse hide'>
                <h5>Ingredients:</h5>
                <div className='list-group list-group-horizontal'>
                    <ul className={`list-group-item col-8`}>
                        {cocktail.cocktail_ingredients.map((ingredient) => {
                            return (
                                <div className='row' key={ingredient.id}>
                                    <h6 className={`list-group-item-primary p-2 col-9`}>{ingredient.measure} — {ingredient.ingredient.name}</h6>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <h5>Instructions:</h5>
                <p className='col-8'>{cocktail.instructions}</p>
                {errors.map(err => {
                    return (
                        <div className='alert alert-danger alert-dismissible fade show' key={err}>
                            {err}
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        </div>)
                })}
                <button className='btn btn-primary btn-lg fa fa-trash' value={cocktail.id} onClick={handleDelete}></button>
            </div>
        </div>
    )
}

export default CocktailCard;