import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  
    //Hook personalizado
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {/* <LoadingMessage isLoading={ isLoading }/> */}
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifGridItem 
                        key={ image.id }
                        // Esparcimos todas las propiedades de 'image'
                        { ...image }
                         />
                    ))
                }
            </div>

        </>
    )
}