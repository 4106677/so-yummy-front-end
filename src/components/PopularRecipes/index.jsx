import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PopularRecipeCard } from './PopularRecipeCard';
import * as Styled from './PopularRecipes.styled';

const defaultTitle = 'Popular recipe';
const defaultBaseLinkUrl = '/popular-recipe';

export function PopularRecipes({
  title = defaultTitle,
  titleGap = '2.5rem',
  tag = 'h3',
  recipes = [],
  baseLinkUrl = defaultBaseLinkUrl
}) {
  return (
    <Styled.Wrapper>
      {title ? (
        <Styled.Title as={tag} titleGap={titleGap}>
          {title}
        </Styled.Title>
      ) : null}

      {recipes.length ? (
        <Styled.RecipeList>
          {recipes.map(({ id, ...recipe }) => (
            <Styled.ListItem key={id}>
              <Link to={`${baseLinkUrl}/${id}`}>
                <PopularRecipeCard {...recipe} />
              </Link>
            </Styled.ListItem>
          ))}
        </Styled.RecipeList>
      ) : null}
    </Styled.Wrapper>
  );
}

PopularRecipes.propTypes = {
  title: PropTypes.string,
  titleGap: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  recipes: PropTypes.array,
  baseLinkUrl: PropTypes.string
};
