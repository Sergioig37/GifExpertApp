import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
       
export const GifExpertApp = () => {
  //useState snippet te crear un hook con el useState automáticamente
  const [categories, setcategories] = useState([" Categoría 1", "Categoría 2"]);

  const addCategory = (categoria) => {
    //setCategories(["Categoría 3"])  <= esto borra el array entero y lo sustituye solo por eso

    //con este metodo de abajo concatenamos la categoría nueva con el array de categorías
    setcategories([...categories, categoria]);
  };

  // https://api.giphy.com/v1/gifs/search?api_key=5Px5eEfD8XwSw6EBYY84ywknPkqEau6m&q=cheeseburgers&limit=10
  return (
    <>
      {/* * Título * */}

      <h1>GifExpertApp</h1>
      {/* * Input * */}
      <AddCategory onAddCategory={addCategory} />

     
        {/**todo código que metamos aquí (return de html) tiene que ir entre llaves para que no pete todo */}
        {/* * Usa llaves para cuando hagas un return o código javascript, usa parentesis cuando simplemente pintes un componente (Como en este caso GifGrid) * */}
        {categories.map((category) => (
          <GifGrid key={category} categoria={category}></GifGrid>
        ))}

      {/* * Listado de Gif * */}
      {/* * Item de Gif * */}
    </>
  );
};
