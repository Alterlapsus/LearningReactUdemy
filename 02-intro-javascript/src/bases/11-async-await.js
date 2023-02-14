

// ASYNC-AWAIT 


// const getImagePromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//          resolve('https://asdfasdfasdasdf.com')
//     })
//     return promesa;
// }

// simplificando quedaría así 

// const getImagePromesa = () => new Promise( resolve => resolve('https://asdfasdfasdasdf.com'))
        
// getImagePromesa().then( console.log );


const getImagen = async () =>{
    
    // para manejo de errores utilizo try y catch, básicamente dice        try = intenta hacer este cuerpo  
    // catch = si da error ejecuta catch 

    try {
        const apiKey = 'omYwZyv99GLu1Yl9Zwuf0n350FnO8m2t';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    // antes de ejecutar la siguiente linea espera el await que la promesa termine fetch    
        const { data } = await resp.json();
    
        const {url} = data.images.original; 
        const img = document.createElement('img');
        img.src = url; 
    
        document.body.append( img );
    } catch (error) {
        // manejo del error
        console.error(error)
    }

  
}
// para poder trabajar con los await es que debe estar dentro de un async

getImagen();

