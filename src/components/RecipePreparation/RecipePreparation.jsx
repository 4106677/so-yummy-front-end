import {
  RecipePreparationWrapper,
  CookingRecipe,
  RecipeImageWrapper,
  RecipePreparationBlock,
  CookingSteps,
  CookingStep,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ preparationData }) => {
  const { instructions, thumb } = preparationData;
  let cookingSteps = [];
  if (instructions) {
    if (!instructions.includes('\r\n')) {
      return;
    } else {
      cookingSteps = instructions.split('\n');
    }
  }

  return (
    <RecipePreparationWrapper>
      <RecipePreparationBlock>
        <h2>RecipePreparation</h2>
        <CookingRecipe>
          {cookingSteps.length > 0 ? (
            <CookingSteps>
              {cookingSteps.length > 0 &&
                cookingSteps.map((step, idx) => (
                  <CookingStep key={idx}>
                    <p>{step}</p>
                  </CookingStep>
                ))}
            </CookingSteps>
          ) : (
            instructions
          )}
        </CookingRecipe>
      </RecipePreparationBlock>
      <RecipeImageWrapper img={thumb}></RecipeImageWrapper>
    </RecipePreparationWrapper>
  );
};
