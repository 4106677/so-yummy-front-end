import { Link } from 'react-router-dom';
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
} from '../../../redux/mainRecipes/selectors';

import {
  CardImg,
  CardTitle,
  CardDish,
  RowTable,
} from '../../CardMeal/CardMeal.styled';
import NoImage from '../../../images/default.jpg';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const categories = useSelector(getFullCategoryList);
  const recipes = useSelector(getAllRecipes);

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
            <Link to={`/recipe/${_id}`}>
              <CardImg src={preview ? preview : NoImage} alt={title} />
              <CardTitle>{title}</CardTitle>
            </Link>
          </CardDish>
        ))}
      </RowTable>
    </>
  );
};

export default RecipeList;
