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
import { getShoppingList } from 'redux/shoppingList/selectors';
import { addShoppingList } from 'redux/shoppingList/operations';
import { useDispatch, useSelector } from 'react-redux';

export const RecipeIngridientsList = ({ ingridientsData }) => {
  const shoppingList = useSelector(getShoppingList);
  // console.log(shoppingList);
  const dispatch = useDispatch();

  // const handleCheckboxChange = id => {
  //   dispatch(addShoppingList(id));
  // };

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
                  <input
                    type="checkbox"
                    id={ingridient._id}
                    disabled={shoppingList.some(
                      item => item.ttl === ingridient.ttl
                    )}
                    onChange={() => dispatch(addShoppingList(ingridient))}
                  />
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
