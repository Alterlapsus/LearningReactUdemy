

// resolve = se ejectua cuando la promesa es exitosa
// reject = se ejecuta cuando la promesa falla o no se cumple

import {getHeroeById} from './bases/08-impor-export'

// const promesa = new Promise( (resolve, reject) => {
    
//     // setTimeout( () => {
//     //     resolve();
//     // }, 2000 )

//     // tarea
//     // importar el getHeroById

//     setTimeout( () => {

//         const p1 = getHeroeById(3);
//         // console.log(p1);
//         resolve( p1 ); 
//         // reject( p1 ); 
//         // reject('No se pudo encontrar el héroe', p1); 
    
//     }, 2000 ) 

// });

// tres métodos importantes 
// catch = la promesa dio un error o manejamos el reject  
// then = la promesa se hizo correctamente
// finally =  se ejecuta despues del then o despues del catch 

// promesa.then( () => {
//     console.log('Then de la promesa')
// })

// promesa.then ( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( error => console.warn(error) );


    const getHeroByIdAsync =  (id ) => {

        // actualmente se realiza así return new Promise
    return new Promise( (resolve, reject) => {
    
        // setTimeout( () => {
        //     resolve();
        // }, 2000 )
    
        // tarea
        // importar el getHeroById
    
        setTimeout( () => {
    
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el heroe', p1);
            }
            // resolve( p1 ); 
            // reject( p1 ); 
            // reject('No se pudo encontrar el héroe', p1); 
        
        }, 2000 ) 
    
    });
    // return promesa; anteriormente se realiza así 
}



getHeroByIdAsync(5)
    // .then( heroe => console.log('Heroe', heroe))
    // reducimos .then 
    .then( console.log )
    // .catch( err => console.warn(err));
    // podemos reducir .catch
    .catch( console.warn);
    