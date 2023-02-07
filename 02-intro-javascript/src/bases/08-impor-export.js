
// import and export  


// import { heroes } from '../src/data/heroes';
// import { heroes } from '../src/data/heroes';
// import { heroes } from './data/heroes';

import  heroes from '../data/heroes';
// import  heroes, { owners } from '../data/heroes';

// console.log( owners );


// const getHeroeById = ( id ) => {
//     return heroes.find( (heroe) => heroes.id === id );
// }

// segunda forma de reducir código 

export const getHeroeById = ( id ) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// Utilizar find and filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') ); 