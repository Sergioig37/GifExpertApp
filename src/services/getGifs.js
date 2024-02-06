export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5Px5eEfD8XwSw6EBYY84ywknPkqEau6m&q=${category}s&limit=10`;
    //fetch es una función para buscar
    const respuesta = await fetch(url);
   const {data} = await respuesta.json();
    

    const gifs = data.map( imagen =>(
      {
        id: imagen.id,
        title: imagen.title,
        url: imagen.images.downsized.url,
        
      }
    )
    

    )
    console.log(gifs)
    return gifs;
  }