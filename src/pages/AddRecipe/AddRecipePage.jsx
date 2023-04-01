import PropTypes from 'prop-types';

// components
import AddRecipeForm from 'components/AddRecipeForm/index.jsx';
import { MainConteiner } from 'components/Container/Container.styled.jsx';

// styles
import * as Styled from './AddRecipePage.styled.js';

const defaultHeading = 'Add recipe';

export function AddRecipePage({ heading = defaultHeading }) {
  return (
    <Styled.Section>
      <MainConteiner>
        {heading ? <Styled.Heading>{heading}</Styled.Heading> : null}

        <AddRecipeForm />
      </MainConteiner>
    </Styled.Section>
  );
}

AddRecipePage.propTypes = {
  heading: PropTypes.string
};
