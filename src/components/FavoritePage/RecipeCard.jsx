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
  const handleDelete = () => {
    onDelete(recipe.id);
  };

  return (
    <Recipeitem>
      <Image src={recipe.image} alt={recipe.title} />
      <Info>
        <TopCard>
          <Title>{recipe.title}</Title>
          <BtnRemove onClick={handleDelete}>
            <Icon src={IconDes} alt="Logo" />
          </BtnRemove>
        </TopCard>
        <Text>
          {recipe.texst} Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eligendi, in iste, error dolorum sunt eius sapiente magnam
          deserunt, alias quaerat fugit. Tenetur necessitatibus quos minus sed
          inventore!
        </Text>
        <BottomCard>
          <Time>{recipe.time} min</Time>
          <SeeRecipe>See recipe</SeeRecipe>
        </BottomCard>
      </Info>
    </Recipeitem>
  );
}
