import React, { useState } from 'react';

function IngredientCard({ ingredient, onDeleteIngredient }) {
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
        <h5 className={`row list-group-item-primary`}>
            <button className='btn btn-primary text-center col-1'>Color</button>
            <p className="col-10">{ingredient.name}</p>
            <button className='btn btn-primary btn-sm col-1 fa fa-trash' onClick={handleDelete}></button>
        </h5>
    )
}

export default IngredientCard;