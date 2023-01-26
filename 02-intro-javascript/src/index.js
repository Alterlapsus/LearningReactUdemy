

// funciones en JS
// const saludar = function( nombre ){
//     return `Hola, ${nombre}`;
// }

// Dos formas de declarar funciones de flecha 

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

// puedo pasarla sin parametros
const saludar4 = () => `Hola Mundo`;



// saludar = 30;

// console.log( saludar('Israel') );

console.log( saludar2('Israel') );
console.log( saludar3('De León'));
console.log( saludar4());


// const getUser = () => {
//     return{
//         uid: 'ABC123',
//         username: 'El_Papi1501'
//     }
// }
// Otra forma de hacerlo
const getUser = () => ({ 
        uid: 'ABC123',
        username: 'El_MR_Robot1501'
    })

const user = getUser();
console.log( user );

// Tarea
// 1. Transformen a una función de flecha 
// 2. Tiene que retornar un objeto implícito 
// 3. Pruebas

// function getUsuarioActivo( nombre ){
//     return {
//         uid: 'ABC567',
//         username: nombre,
//     }
// };

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre,
})


const usuarioActivo = getUsuarioActivo('ISRAEL');
console.log( usuarioActivo );


