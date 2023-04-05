// import { RecipeContainer } from './RecipePage.styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngridientsList } from 'components/RecipeIngridientsList/RecipeIngridientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';
import { Container } from 'components/Container/Container';
import { useEffect, useState } from 'react';
// import { PageLayout } from 'components/Layout/PageLayout/PageLayout';

const BASE_URL = 'https://recipes-becend-49lg.onrender.com/';

const getRecipeDetails = async id => {
  const response = await axios.get(`${BASE_URL}recipes/byId/${id}`);

  return response;
};

const getIngredientByID = async id => {
  const response = await axios.get(`${BASE_URL}ingredients/byId/${id}`);
  return response.data[0];
};

export const RecipePage = () => {
  const { recipeId } = useParams();
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

        const ingridientsData = await Promise.all(
          ingredients.map(async item => {
            const response = await getIngredientByID(item.id);
            // console.log(response);
            const data = {
              measure: item.measure,
              name: response.ttl,
              img: response.thb,
              id: response._id,
            };
            return data;
          })
        );
        setIngridientsData(ingridientsData);
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
        '...loading'
      ) : error ? (
        <h2>Data processing error. Try reloading the page.</h2>
      ) : (
        heroData &&
        ingridientsData &&
        preparationData && (
          <>
            <RecipePageHero isOwnRecipe={false} heroData={heroData} />
            <Container>
              <RecipeIngridientsList ingridientsData={ingridientsData} />
              <RecipePreparation preparationData={preparationData} />
            </Container>
          </>
        )
      )}
      {/* <PageLayout title={null}> */}

      {/* </PageLayout> */}
    </>
  );
};
