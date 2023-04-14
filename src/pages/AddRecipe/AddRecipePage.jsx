import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-loader-spinner';

// components
import { PageLayout } from 'components/Layout/PageLayout/PageLayout.jsx';
import { AddRecipeForm } from 'components/AddRecipeForm/index.jsx';
import { Socials } from 'components/Socials/index.jsx';
import { PopularRecipes } from 'components/PopularRecipes/index.jsx';

// styles
import * as Styled from './AddRecipePage.styled.js';

// hooks, services, utils
import { useMatchMediaQuery } from 'components/Hooks/useMatchMediaQuery.js';
import { recipeService } from 'services/RecipeService.js';
import { Error } from 'components/Error/index.jsx';

const defaultHeading = 'Add recipe';

function AddRecipePage({ heading = defaultHeading }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState([]);

  const isFirstRender = React.useRef(true);
  const { isLaptop } = useMatchMediaQuery();

  React.useEffect(() => {
    if (isFirstRender.current) {
      setIsLoading(true);

      Promise.allSettled([
        recipeService.getPopular(),
        recipeService.getIngredients({
          transform: (data) => data.map(({ ttl, _id }) => ({ ingredient: ttl, id: _id }))
        }),
        recipeService.getCategories()
      ])
        .then((data) => setData(data))
        .finally(() => setIsLoading(false));

      isFirstRender.current = false;
    }
  }, [isLoading]);

  function handleSubmit(recipe, resetForm) {
    setIsLoading(true);

    recipeService
      .addRecipe(recipe)
      .then(() => {
        resetForm();
        setIsSuccess(true);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        setTimeout(() => {
          setIsError(false);
        }, 3000);

        setIsLoading(false);
      });
  }

  const [popularRecipes, ingredients, categories] = data;

  return (
    <PageLayout title={heading}>
      <Styled.Wrapper>
        {/* LEFT SIDE */}
        <Styled.SubWrapper1>
          {ingredients?.value && categories?.value ? (
            <AddRecipeForm
              onSubmit={handleSubmit}
              categories={categories?.value}
              ingredients={ingredients?.value}
            />
          ) : null}
        </Styled.SubWrapper1>

        {/* RIGHT SIDE */}
        <Styled.SubWrapper2>
          {isLaptop ? <Socials /> : null}

          {popularRecipes && popularRecipes.value.length ? (
            <PopularRecipes recipes={popularRecipes.value} />
          ) : null}
        </Styled.SubWrapper2>
      </Styled.Wrapper>

      {/* loader, Component Loader not working */}
      {isLoading ? (
        <Styled.Loading>
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
        </Styled.Loading>
      ) : null}

      {/* ERROR MESSAGE */}
      {isError ? <Error errorMsg="Oops, something went wrong" /> : null}

      {/* SUCCESS MODAL */}
      {isSuccess ? (
        <Styled.SuccessModal>
          <Styled.SuccessWrapper>
            <Styled.SuccessMessage>The recipe succesfully added!</Styled.SuccessMessage>
            <Styled.SuccessCloseButton type="button" onClick={() => setIsSuccess(false)}>
              Close
            </Styled.SuccessCloseButton>
          </Styled.SuccessWrapper>
        </Styled.SuccessModal>
      ) : null}
    </PageLayout>
  );
}

AddRecipePage.propTypes = {
  heading: PropTypes.string
};

export default AddRecipePage;
