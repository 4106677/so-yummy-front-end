import PropTypes from 'prop-types';

import * as Styled from './PopularRecipeCard.styled';

export function PopularRecipeCard({ image, title, description, linesToTruncate = 3 }) {
  return (
    <Styled.Article>
      <Styled.Image src={image} alt={`${title} sample`} />

      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description linesToTruncate={linesToTruncate}>{description}</Styled.Description>
      </Styled.Wrapper>
    </Styled.Article>
  );
}

PopularRecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linesToTruncate: PropTypes.number
};
