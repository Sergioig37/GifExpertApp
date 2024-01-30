import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {

    
    //useState snippet te crear un hook con el useState automáticamente
  const [categories, setcategories] = useState([" Categoría 1", "Categoría 2"]);


    const addCategory = (categoria) =>{
        //setCategories(["Categoría 3"])  <= esto borra el array entero y lo sustituye solo por eso
        
        //con este metodo de abajo concatenamos la categoría nueva con el array de categorías
        setcategories([...categories, categoria]);
    }

  return (
    <>
      {/* * Título * */}


      <h1>GifExpertApp</h1>
      {/* * Input * */}
    <AddCategory onAddCategory = {addCategory}/>

      {/* * Listado de Gif * */}
      <button onClick={addCategory}>Agregar</button>
      <ol>
        {/**todo código que metamos aquí (return de html) tiene que ir entre llaves para que no pete todo */}
        {categories.map((category, index) => {
            {/**El list item tiene que tener una key porque sino da un warning */}
            {/**La mejor llave es el index porque siempre va a ser único*/}
          return <li key={index}> {category}</li>;
        })}
      </ol>
      {/* * Item de Gif * */}
      
    </>
  );
};
