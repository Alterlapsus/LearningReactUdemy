

// Desestructuración de Arreglos
            //  ó
// asignación desestructurante de arreglos 

const personajes = ['Israel', 'Wilson', 'Luis'];

// extraer indediente los valores del arreglo
// Para recorrer el arreglo, nos basamos en las posiciones con una coma , 
const [ , , p2 ] = personajes;

console.log( p2 );

const retornaArreglo = () =>{
    return ['ABC', 123]
}

// Desestructuración de arreglos

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros ); 

// Tarea 

const estado = ( valor ) =>{
    return [ valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = estado( 'Israel ');

console.log( nombre );
setNombre();