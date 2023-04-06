import {
  RecipeIngridientsWrapper,
  IngridientsTableHeader,
  IngridientsList,
  IngridientsItem,
  IngridientPlaceholder,
  IngridientInfo,
  IngridientName,
  IngridientDetails,
  IngridientQuantity,
  IngridientCheck,
  IngridientImage,
} from './RecipeIngridientsList.styled';

export const RecipeIngridientsList = ({ ingridientsData }) => {
  return (
    <RecipeIngridientsWrapper>
      <IngridientsTableHeader>
        <p>Ingridients</p>
        <p>Number</p>
        <p>Add to list</p>
      </IngridientsTableHeader>
      <IngridientsList>
        {ingridientsData.map(ingridient => (
          <IngridientsItem key={ingridient.id}>
            {ingridient.img ? (
              <IngridientImage src={ingridient.img} alt={ingridient.name} />
            ) : (
              <IngridientPlaceholder>No Image</IngridientPlaceholder>
            )}
            <IngridientInfo>
              <IngridientName>{ingridient.name}</IngridientName>
              <IngridientDetails>
                <IngridientQuantity>{ingridient.measure}</IngridientQuantity>
                <IngridientCheck>
                  <input type={'checkbox'} id={ingridient.id} />
                  <label htmlFor={ingridient.id}></label>
                </IngridientCheck>
              </IngridientDetails>
            </IngridientInfo>
          </IngridientsItem>
        ))}
      </IngridientsList>
    </RecipeIngridientsWrapper>
  );
};
