

// operador condicional ternario

const activo = true; 

// let mensaje = '';
  
// if ( !activo ) {
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }
// forma corta de realizarlo 
        // ? cuando esto se cumpla   : caso contrario
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

// habran situaciones donde quiero que se cumpla solo una condición

// const mensaje = ( !activo ) ? 'Activo' : null;
// pero es una forma innecesaria de hacerlo 

// forma correcta  

const mensaje = activo ; 

console.log(mensaje);