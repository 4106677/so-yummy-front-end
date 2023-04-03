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
} from './RecipeIngridientsList.styled';

export const RecipeIngridientsList = () => {
  return (
    <RecipeIngridientsWrapper>
      <IngridientsTableHeader>
        <p>Ingridients</p>
        <p>Number</p>
        <p>Add to list</p>
      </IngridientsTableHeader>
      <IngridientsList>
        <IngridientsItem>
          {/* {ingridient.image ? (
            <IngridientImage />
          ) : (
            <IngridientPlaceholder>No Image</IngridientPlaceholder>
          )} */}
          <IngridientPlaceholder></IngridientPlaceholder>
          <IngridientInfo>
            <IngridientName>{/* {product.name} */}Salmon</IngridientName>
            <IngridientDetails>
              <IngridientQuantity>
                {/* {product.quantity} */}400 g
              </IngridientQuantity>
              <IngridientCheck>
                <input type={'checkbox'} id="ch1" />
                <label for={'ch1'}></label>
              </IngridientCheck>
            </IngridientDetails>
          </IngridientInfo>
        </IngridientsItem>
      </IngridientsList>
    </RecipeIngridientsWrapper>
  );
};
