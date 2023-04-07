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
          <IngridientsItem key={ingridient._id}>
            {ingridient.thb ? (
              <IngridientImage src={ingridient.thb} alt={ingridient.ttl} />
            ) : (
              <IngridientPlaceholder>No Image</IngridientPlaceholder>
            )}
            <IngridientInfo>
              <IngridientName>{ingridient.ttl}</IngridientName>
              <IngridientDetails>
                <IngridientQuantity>{ingridient.measure}</IngridientQuantity>
                <IngridientCheck>
                  <input type={'checkbox'} id={ingridient._id} />
                  <label htmlFor={ingridient._id}></label>
                </IngridientCheck>
              </IngridientDetails>
            </IngridientInfo>
          </IngridientsItem>
        ))}
      </IngridientsList>
    </RecipeIngridientsWrapper>
  );
};
