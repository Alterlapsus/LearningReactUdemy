

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
    persona:persona
} );

// lo podemos visualizar en una tabla
console.table( {
    // propiedad  //valor
        persona:persona
    } );
    
    