import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChanged = ( {target} ) => {

        // console.log(event.target.value);
        setInputValue(target.value);
    }
    
    const onSubmit = ( event ) => {

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
        <form onSubmit={ onSubmit }>
            
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