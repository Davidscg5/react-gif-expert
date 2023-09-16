import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components";


describe('Pruebas AddCategory', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {         

        render( <AddCategory onNewCategory={ () => {  } } />);
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Rick y Morty' } } );
        expect(input.value).toBe('Rick y Morty');
     });

     test('Debe de llamar onNewCategory si el input tiene un valor', () => {          
 
        const inputValue = 'Rick y Morty';
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        //Comprueba que el input después de haberse usado, vacía la entrada texto para volver a escribir/buscar
        expect( input.value ).toBe('');   
        //Comprueba que la función se ha llamado
        expect(onNewCategory).toHaveBeenCalled();
        //Comprueba que la función se ha llamado una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1); 
        //Comprueba que la función se ha llamado con el valor de la caja de texto
        expect(onNewCategory).toHaveBeenCalledWith( inputValue ); 
        // screen.debug();
      });

      test('No debe de llamar onNewCategory si el input está vacío', () => {          
 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        //Comprueba que la función se ha llamado 0 veces
        expect(onNewCategory).toHaveBeenCalledTimes(0); 
        //Comprueba que no se hace la llamada la función / Negación 'not'
        expect(onNewCategory).not.toHaveBeenCalled();
        // screen.debug();
      });
});