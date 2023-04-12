import { Link } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getCategoryList,
  getAllRecipesByCategory,
} from '../../../redux/mainRecipes/operations';
import {
  getFullCategoryList,
  getAllRecipes,
  isLoadingRecipesOfCategory,
} from '../../../redux/mainRecipes/selectors';

import {
  CardImg,
  CardTitle,
  CardDish,
  RowTable,
} from '../../CardMeal/CardMeal.styled';
import NoImage from '../../../images/default.jpg';

export const RecipeList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const categories = useSelector(getFullCategoryList);
  const recipes = useSelector(getAllRecipes);
  console.log(recipes);
  // const isLoading = useSelector(isLoadingRecipesOfCategory);

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  useEffect(() => {
    if (categoryName) {
      dispatch(getAllRecipesByCategory(categoryName));
    } else if (categories?.length) {
      dispatch(getAllRecipesByCategory(categories[0]));
    }
  }, [dispatch, categoryName, categories]);

  return (
    <>
      <RowTable>
        {recipes.slice(0, 8).map(({ _id, title, preview }) => (
          <CardDish key={_id}>
            <Link to={`/recipes/byId/${_id}`}>
              <CardImg src={preview ? preview : NoImage} alt={title} />
              <CardTitle>{title}</CardTitle>
            </Link>
          </CardDish>
        ))}
      </RowTable>
    </>
  );
};

// import { Link } from 'react-router-dom';

// import { CardWrapper, CardImg, CardTitle, CardWrap } from './RecipeList.styled';
// import NoImage from '../../../images/default.jpg';

// export const RecipeList = ({ meals = [] }) => {
//   console.log(meals);
//   const recipeCreator = meals.map(({ _id, title, preview }) => (
//                 <CardWrap key={_id}>
//                   <Link to={`/recipes/byId/${_id}`}>
//                     <CardImg
//                       src={preview ? preview : NoImage }
//                       alt={title}
//                     />
//                     <CardTitle>{title}</CardTitle>
//                   </Link>
//                 </CardWrap>
//               ))

//   return (
//     <>
//           <CardWrapper>{recipeCreator}</CardWrapper>
//     </>
//   );
// };
