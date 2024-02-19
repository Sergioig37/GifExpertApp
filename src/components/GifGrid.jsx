import React, { useState } from "react";
import { getGifs } from "../services/getGifs";
import { useEffect } from "react";
import { Gifs } from "./Gifs";

export const GifGrid = ({ categoria }) => {
  //asincrono :  que el programa manda petición y espera a que llegue la respuesta
  //sincrono:  sigue incluso si no responde

  //cada vez que cambia el hook recarga el componente

  const [imagenes, setImagenes] = useState([]);

  // const getImagenes = async () => {
  //   const gifs = await getGifs(categoria);

  //   setImagenes(gifs);
  // };

  // //hace algo si se dan unas condiciones
  // useEffect(
  //   () => {
  //     getImagenes();
  //   }, //en vacío significa que es al cargar
  //   []
  // );

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=5Px5eEfD8XwSw6EBYY84ywknPkqEau6m&q=${categoria}s&limit=10`)
      .then((response) => {
        return response.json();
      })
      .then(({data}) => {
        const gifs = data.map( imagen =>(
          {
            id: imagen.id,
            title: imagen.title,
            url: imagen.images.downsized.url,
            
          }
        ))
        
        setImagenes(gifs);
      });
  }, []);

  return (
    <>
      <h4>{categoria}</h4>
      {imagenes.map(({ id, title, url }) => (
        <Gifs id={id} title={title} url={url} />
      ))}
    </>
  );
};
