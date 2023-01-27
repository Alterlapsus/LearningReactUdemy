

// Desestructuración de objetos
// o también llamada
// Asignación desestructurante

const persona = {
    nombre: 'Israel',
    edad: 25,
    clave: 'Robot',
    // rango: 'Soldado',
};

// extrae lo que se coloca dentro de las llaves { nombre } de este objeto(persona)

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

// si solo me interesa extraer una propiedad lo coloco entre llaves ({ nombre })

// si el objeto no tiene una propiedad la podemos agregar y podemos añadirle su valor por defecto
const prueba = ({ clave, nombre, edad, rango = 'capitan' }) => {

    // const { nombre, edad, clave } = usuario;

    // console.log( nombre, edad, rango );

    // podemos retornar un objeto que tiene más objetos dentro 

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1415,
            lng: -12.3222,
        }
    }

}


// llamamos la función
// desestructuración de objetos 
// extraigo el objeto latlng
// Si necesito la latitud y la longitud en sus respectivas constantes lo haré de esta forma latlng:{lat, lng} basicamente extrae la lat y lng pero ahora como constantes
// de esta  manera podemos acceder a objetos anidados y asignarlos a constantes

// primera forma de hacerlo no muy común
// const { nombreClave, anios, latlng:{ lat, lng } } = prueba( persona );

// segunda forma de hacerlo lo más común 
const { nombreClave, anios, latlng } = prueba( persona );
// desestructuramos de nuevo
const { lat, lng } = latlng; 

console.log( nombreClave, anios );
console.log( lat, lng );
// se renombra de esta forma nombre:nombre2
// const { nombre:nombre2 } = persona;

// console.log( nombre2 );
