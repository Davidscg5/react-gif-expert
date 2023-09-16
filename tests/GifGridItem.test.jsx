import { GifGridItem } from "../src/components";
import { render, screen } from '@testing-library/react';


describe('Pruebas GifGridItem', () => {

    const title = 'Rick y Morty';
    const url = 'https://media2.giphy.com/media/f6aTMoYlqUOEViRiBu/giphy.gif?cid=eee15420xucn80h4bt7ewlplhn9p59fev50p1rwhe372kbmo&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('Render snapshot', () => { 
        
        const { container } = render( 
            <GifGridItem 
                title={ title } 
                url={ url } 
            /> 
        );
        expect( container ).toMatchSnapshot();
     });
     
    test('Debe mostrar la imagen con la URL y el ALT indicado', () => { 
        
        render( 
            <GifGridItem 
                title={ title } 
                url={ url } 
            /> 
        );
        // screen.debug();        
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
     });
     
     test('Debe mostrar el título en el componente', () => { 
         
         render( 
             <GifGridItem 
                 title={ title } 
                 url={ url } 
             /> 
         );
         // screen.debug();        
         expect( screen.getByText( title )).toBeTruthy();
      });
});

