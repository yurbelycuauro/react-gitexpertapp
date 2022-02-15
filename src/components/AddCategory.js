import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({setCategories}) {
    const [inputValue, setinputValue] = useState('');
    
    const handleInputValue = (e) =>{

        setinputValue( e.target.value );
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cat=>[inputValue,...cat]);
            setinputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputValue }
            
            />    
        </form>
        
    )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired,
}
