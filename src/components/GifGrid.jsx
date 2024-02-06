import React, { useState } from "react";
import {getGifs} from "../services/getGifs";
import { useEffect } from "react";
import { Gifs } from "./Gifs";

export const GifGrid = ({categoria}) => {


  //asincrono :  que el programa manda petición y espera a que llegue la respuesta
  //sincrono:  sigue incluso si no responde

  //cada vez que cambia el hook recarga el componente

  const [imagenes, setImagenes] = useState([])

  const getImagenes = async () =>{
    const gifs = await getGifs(categoria);
  
    setImagenes(gifs);
    
  } 

  //hace algo si se dan unas condiciones
  useEffect(() => {
    getImagenes();
   
  },//en vacío significa que es al cargar
   [])
  

 
  
  

  return (
    <>
       <h4>{categoria}</h4>
      {
        imagenes.map(
          ({id, title, url}) => (

            <Gifs id = {id} title= {title} url= {url}/>
          )
        )
      }
       
    </>
  );
};
