import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  
    //Hook: función que regresa algo

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async() => {

        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect( () => {
        
        getImages();

        return () => {
            
        }
    }, [] )
    return {
        images,
        isLoading
    }
}
