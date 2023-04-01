import * as Styled from './AddRecipePage.styled.js';
import PropTypes from 'prop-types';
import AddRecipeForm from 'components/AddRecipeForm/index.jsx';

const defaultHeading = 'Add recipe';

export function AddRecipePage({ heading = defaultHeading }) {
  return (
    <Styled.Section>
      <Styled.Container>
        {heading ? <Styled.Heading>{heading}</Styled.Heading> : null}

        <AddRecipeForm />
      </Styled.Container>
    </Styled.Section>
  );
}

AddRecipePage.propTypes = {
  heading: PropTypes.string
};
