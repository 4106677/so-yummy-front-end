import { Link } from 'react-router-dom';

import { CardWrapper, CardImg, CardTitle, CardWrap } from './RecipeList.styled';
import NoImage from '../../../images/default.jpg';

export const RecipeList = ({ meals = [] }) => {
  console.log(meals);
  const recipeCreator = meals.map(({ _id, title, preview }) => (
                <CardWrap key={_id}>
                  <Link to={`/recipes/byId/${_id}`}>
                    <CardImg
                      src={preview ? preview : NoImage }
                      alt={title}
                    />
                    <CardTitle>{title}</CardTitle>
                  </Link>
                </CardWrap>
              ))

  return (
    <>
          <CardWrapper>{recipeCreator}</CardWrapper>
    </>
  );
};






