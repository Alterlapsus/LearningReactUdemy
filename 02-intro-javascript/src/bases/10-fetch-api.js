

// FETCH API

const apiKey = 'omYwZyv99GLu1Yl9Zwuf0n350FnO8m2t';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// forma de hacerlo pero cuesta mantener
// peticion.then( (resp) => {
//     resp.json().then( data => {
//         console.log(data);
//     });
// })
// .catch( console.warn );

// forma recomendada

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url; 

        document.body.append( img );
    })
    .catch( console.warn );

