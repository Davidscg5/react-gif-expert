import { render, screen } from '@testing-library/react';
import { getGifs } from './getGifs';


describe('App GIF Expert, Component Helper getGifs', () => {

    const title = 'Rick y Morty';
    const url = 'https://media2.giphy.com/media/f6aTMoYlqUOEViRiBu/giphy.gif?cid=eee15420xucn80h4bt7ewlplhn9p59fev50p1rwhe372kbmo&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('Debe retornar un arreglo de Gifs', async() => { 
        

        const gifs = await getGifs('Rick y Morty');
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0);        
        expect( gifs[0] ).toEqual({            
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
     });
});
