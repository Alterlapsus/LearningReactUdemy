

const nombre = 'Israel';
const apellido = 'De León';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre} 
${ apellido}
${ 1 + 1 }
`;


console.log( nombreCompleto );


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(` Este un saludo: ${ getSaludo( nombre) } `);