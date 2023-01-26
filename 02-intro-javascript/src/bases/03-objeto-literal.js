

// objetos literales

const persona = {
// llave      //valor
    nombre: 'Israel',
    apellido: 'Aveiro',
    edad: 38,
    direccion: {
        ciudad: 'New York',
        zip: 5533456,
        lat: 14.334,
        lng: 35.67895
    }
};

// recuperar el nombre de Israel 
console.log( persona.nombre );

// creamos un nuevo objeto que tiene una propiedad llamada persona y el valor al que apunta es al objeto
console.log( {
    // propiedad  //valor
    // persona:persona
} );

// lo podemos visualizar en una tabla
console.table( {
    // propiedad  //valor
    // persona:persona
    } );
    

// si queremos crear otro objeto clonado realizamos una asignación de referencia es decir asignamos los parametros y valores del objeto literal persona a persona2

// No debemos de realizar este tipo de mutaciones como en el siguiente ejemplo: 

// const persona2 = persona;

// Forma correcta de crear un clon utilizando spread que son ... y el nombre del objeto que se quiere clonar
const persona2 = { ...persona }
// cambiar valores de los parametros del objeto
persona2.nombre = 'Luis'; 

console.log( persona );
console.log( persona2 );