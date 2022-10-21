import React from 'react';

function IngredientCard({ ingredient, ingredientColor, onUpdateIngredient, onDeleteIngredient }) {

    function handleUpdate() {
        fetch(`/ingredients/${ingredient.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                instock: !ingredient.instock
            }),
        })
            .then(r => r.json())
            .then((updatedIngredient) => onUpdateIngredient(updatedIngredient))
    }

    function handleDelete() {
        const result = window.confirm(`Are you sure you want to delete ${ingredient.name}?`)
        if (result) {
            fetch(`/ingredients/${ingredient.id}`, {
                method: "DELETE",
            })
                .then(r => r.json())
                .then(() => onDeleteIngredient(ingredient))
        }
    }

    return (
        <h5 className={`row list-group-item-${ingredientColor(ingredient)}`}>
            <button className='btn btn-primary btn-sm col-1 fa fa-shopping-cart' onClick={handleUpdate}></button>
            <p className="col-10">{ingredient.name}</p>
            <button className='btn btn-primary btn-sm col-1 fa fa-trash' onClick={handleDelete}></button>
        </h5>
    )
}

export default IngredientCard;