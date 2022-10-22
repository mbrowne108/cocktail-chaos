import React, { useState } from 'react';

function NewIngredientForm({ onNewIngredient }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        instock: false
    })

    function handleChange(e) {
        let value = e.target.value

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        setFormData({...formData, [e.target.name]: value})
    }

    function formSubmit(e) {
        e.preventDefault()
        fetch(`/ingredients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then((newIngredient) => onNewIngredient(newIngredient))
                setFormData({
                    name: '',
                    instock: false
                })
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="modal-dialog container col-4 bg-light">
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='display-6'>Add New Ingredient</h5>
                    <button type="button" className="close" data-bs-dismiss="modal">X</button>
                </div>
                <div className='modal-body'>
                    <form onSubmit={formSubmit}>
                        <div className='mb-3'>
                            {errors.map(err => {
                                return (
                                    <div className='alert alert-danger alert-dismissible fade show' key={err}>
                                        {err}
                                        <button type="button" className="close" data-bs-dismiss="alert">X</button>
                                    </div>)
                            })}
                        </div>
                        <div className='mb-3'>
                            <label>Ingredient Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className='form-control'/>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" name="instock" checked={formData.instock} onChange={handleChange}/>
                            <label className='form-check-label'>Do you currently have this ingredient?</label>
                        </div>
                        <br/>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary col-4'>Add Ingredient</button>  
                        </div>
                    </form>
                </div>
            </div>     
        </div>
    );
}

export default NewIngredientForm;