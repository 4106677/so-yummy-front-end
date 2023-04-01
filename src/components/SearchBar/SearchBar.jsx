import { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm/SearchForm"
import { SearchTypeSelector } from "./SearchTypeSelector/SearchTypeSelector";
import { getAllIngridients } from "../../services/ingridientsAPI";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [ingridients, setIngridients] = useState([]);
  
  useEffect(() => {
    const fetchIngridients = async () => {
      try {
        const { data } = await getAllIngridients(search);
        setIngridients(data, search) // когда будет ингридиент, проверить
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    if (search.length > 0) {
         fetchIngridients();
    }
  },[search])

  const updateSearch = () => {
    setSearch(search);
   }
  
  return (
    <div>
      <SearchForm onSubmit={updateSearch} />
      <SearchTypeSelector items={ingridients} />
    </div>
  );
} 