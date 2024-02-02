import React from "react";

export const GifGrid = ({categoria}) => {


  //asincrono : que el programa manda petición y espera a que llegue la respuesta
  //sincrono: sigue incluso si no responde
  const getGifs = async () =>{
    const url = "https://api.giphy.com/v1/gifs/search?api_key=5Px5eEfD8XwSw6EBYY84ywknPkqEau6m&q=cheeseburgers&limit=10"
    //fetch es una función para buscar
    const respuesta = await fetch(url);
   const {data} = await respuesta.json();
    console.log(data);
  }

  getGifs();

  return (
    <>
       <h4>{categoria}</h4>
    </>
  );
};
