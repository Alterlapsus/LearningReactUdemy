
// variables y constantes

const nombre = 'Israel De';
const apellido = 'León';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// variables de scope estas pueden ser utilizadas localmente o globalmente por lo que permite realizarlo, scope = alcance que las variables tienen
 

if( true ){
    const nombre = 'Cristiano';
    console.log(nombre);
}

console.log(valorDado);