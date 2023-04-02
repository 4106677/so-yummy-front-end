export function RecipeCard ({ recipe, onDelete }) {
  const handleDelete = () => {
    onDelete(recipe.id);
  }

  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <div>
        <h3>{recipe.title}</h3>
        <button onClick={handleDelete}>Remove</button>
        <button>See recipe</button>
      </div>
    </div>
  );
}