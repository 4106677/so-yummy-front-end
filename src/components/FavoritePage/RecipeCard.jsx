import { Image, RecipeCardContainer, Title, Text } from 'styled-components';

export function RecipeCard({ recipe, onDelete }) {
  const handleDelete = () => {
    onDelete(recipe.id);
  }

  return (
    <RecipeCardContainer>
      <Image src={recipe.image} alt={recipe.title} />
      <div>
        <Title>{recipe.title}</Title>
        <Text>{recipe.texst}</Text>
        <button onClick={handleDelete}>Remove</button>
        <button>See recipe</button>
      </div>
    </RecipeCardContainer>
  );
}