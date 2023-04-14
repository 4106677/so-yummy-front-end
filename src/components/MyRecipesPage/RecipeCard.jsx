import {
  Image,
  Title,
  Text,
  Recipeitem,
  TopCard,
  Info,
  BottomCard,
  Time,
  SeeRecipe,
  BtnRemove,
  Icon,
} from './RecipeCard.styled';
import IconDes from '../../images/icons/Des.svg';

export function RecipeCard({ recipe, onDelete }) {
  const handleDelete = ev => {
    onDelete(ev.target.id);
  };

  return (
    <Recipeitem>
      <Image src={recipe.preview} alt={recipe.title} />
      <Info>
        <TopCard>
          <Title>{recipe.title}</Title>
          <BtnRemove id={recipe._id} onClick={handleDelete}>
            <Icon id={recipe._id} src={IconDes} alt="Icon" />
          </BtnRemove>
        </TopCard>
        <Text>{recipe.description}</Text>
        <BottomCard>
          <Time>{recipe.time}</Time>
          <SeeRecipe to={`/recipe/${recipe._id}`}>See recipe</SeeRecipe>
        </BottomCard>
      </Info>
    </Recipeitem>
  );
}
