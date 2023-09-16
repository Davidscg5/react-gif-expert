import { React, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ '' ]);

    // console.log(categories);
    const onAddCategory = ( newCategory ) => {

        // console.log('The Office');
        // Convertir el nuevo elemento y los elementos existentes en minúsculas
        const lowerCaseNewCategory = newCategory.toLowerCase();
        const lowerCaseCategories = categories.map((category) => category.toLowerCase());

        // Comprobar si el valor en minúsculas ya está en la lista
        if (lowerCaseCategories.includes(lowerCaseNewCategory)) return;

        // Si no está en la lista, agregarlo en su forma original (sin cambiar mayúsculas/minúsculas)
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input, componente independiente */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
                currentCategories={ categories }
            />

            {/* Listado de GIFS */}
            <ol>
                {
                    categories.map( (category) => (
                        <GifGrid 
                            key={ category } 
                            category={ category} />
                    ))
                }
            </ol>

            {/* Gif Item */}
        </>
    )

}