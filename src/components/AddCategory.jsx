import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ( {target} ) => {

        // console.log(event.target.value);
        setInputValue(target.value);
    }
    
    const onSubmit = ( event ) => {

        // console.log('Hola mundo desde onSubmit');
        event.preventDefault();
        // console.log(setCategories);
        // console.log(inputValue);
        if( inputValue.trim().length <= 1) {
            return;   
        } else {
            onNewCategory( inputValue.trim() );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            
            <input 
                type="text" 
                placeholder="Buscar GIFs" 
                id="npt-gif" 
                value={ inputValue } 
                onChange={ onInputChanged } 
            />

        </form>
    )

}


AddCategory.propTypes = {

    onNewCategory: PropTypes.func.isRequired,
}