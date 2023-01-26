

// Desestructuración de objetos
// o también llamada
// Asignación desestructurante 

const persona = {
    nombre: 'Israel',
    edad: 25,
    clave: 'Robot'
};

// extrae lo que se coloca dentro de las llaves { nombre } de este objeto(persona)

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornaPersona = ( usuario ) => {

    const { nombre, edad, clave } = usuario;
    
    console.log( edad, clave, nombre );
    
}

// llamamos la función 
retornaPersona( persona );

// se renombra de esta forma nombre:nombre2
// const { nombre:nombre2 } = persona;

// console.log( nombre2 );
