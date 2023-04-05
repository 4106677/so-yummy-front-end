import { useState, useEffect } from 'react';

export function RecipeList({ categories }) {
    const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`/byCategory/:category=${categories}`);
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, [categories]);

  const recipeItems = recipes.map(recipe => (
    <li key={recipe.id}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button>View Recipe</button>
    </li>
  ));

  return <ul>{recipeItems}</ul>;
}