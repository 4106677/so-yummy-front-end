import axios from 'axios';
import { Loading } from './RecipePage.styled';
import { Grid } from 'react-loader-spinner';
import { Error } from '../../components/Error/index';
import { useParams } from 'react-router-dom';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngridientsList } from 'components/RecipeIngridientsList/RecipeIngridientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';
import { Container } from 'components/Container/Container';
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/selectors';
// import { PageLayout } from 'components/Layout/PageLayout/PageLayout';

const BASE_URL = 'https://recipes-becend-49lg.onrender.com/';

const getRecipeDetails = async id => {
  const response = await axios.get(`${BASE_URL}recipes/byId/${id}`);
  return response;
};

export const RecipePage = () => {
  const { recipeId } = useParams();
  // const { _id: userId } = useSelector(selectUser);
  // console.log(userId);
  const [heroData, setHeroData] = useState([]);
  const [ingridientsData, setIngridientsData] = useState([]);
  const [preparationData, setPreparationData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getDataForRecipePage() {
      try {
        const response = await getRecipeDetails(recipeId);
        const {
          title,
          description,
          time,
          thumb,
          preview,
          instructions,
          ingredients,
        } = response.data[0];

        const heroData = { title, description, time };
        setHeroData(heroData);

        const preparationData = { thumb, preview, instructions };
        setPreparationData(preparationData);

        const upgratedIngredients = ingredients.map(ingredient => {
          return { ...ingredient, recipeId };
        });
        setIngridientsData(upgratedIngredients);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getDataForRecipePage();
  }, [recipeId]);

  return (
    <>
      {isLoading ? (
        <Loading>
          <Grid
            height="80"
            width="80"
            color="#8baa36"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Loading>
      ) : error ? (
        <Error errorMsg="Oops, something went wrong" />
      ) : (
        heroData &&
        ingridientsData &&
        preparationData && (
          <>
            <RecipePageHero
              isOwnRecipe={false}
              heroData={heroData}
              recipeId={recipeId}
            />
            <Container>
              <RecipeIngridientsList ingridientsData={ingridientsData} />
              <RecipePreparation preparationData={preparationData} />
            </Container>
          </>
        )
      )}
      {/* <PageLayout title={null}> */}
      {/* // уточнить как приминить этот компонент к моей странице*/}
      {/* </PageLayout> */}
    </>
  );
};

// const ingridientsData = await Promise.all(
//   ingredients.map(async item => {
//     const response = await getIngredientByID(item.id);
//     const data = {
//       measure: item.measure,
//       name: response.ttl,
//       img: response.thb,
//       id: response._id,
//     };
//     return data;
//   })
// );
