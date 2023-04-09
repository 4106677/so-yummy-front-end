import React from 'react';
import PropTypes from 'prop-types';

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

const defaultHeading = 'Add recipe';

export function AddRecipePage({ heading = defaultHeading }) {
  const [data, setData] = React.useState([]);

  const isFirstRender = React.useRef(true);
  const { isLaptop } = useMatchMediaQuery();

  React.useEffect(() => {
    if (isFirstRender.current) {
      Promise.allSettled([
        recipeService.getPopular(),
        recipeService.getIngredients({
          transform: (data) => data.map(({ ttl, _id }) => ({ ingredient: ttl, id: _id }))
        }),
        recipeService.getCategories()
      ]).then((data) => setData(data));

      isFirstRender.current = false;
    }
  }, []);

  const [popularRecipes, ingredients, categories] = data;

  return (
    <PageLayout title={heading}>
      <Styled.Wrapper>
        {/* LEFT SIDE */}
        <Styled.SubWrapper1>
          {ingredients?.value && categories?.value ? (
            <AddRecipeForm categories={categories?.value} ingredients={ingredients?.value} />
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
    </PageLayout>
  );
}

AddRecipePage.propTypes = {
  heading: PropTypes.string
};
