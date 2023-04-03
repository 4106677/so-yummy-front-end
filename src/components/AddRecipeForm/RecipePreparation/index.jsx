import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BlockTitle } from '../SharedFormFields/BlockTitle';
import { Textarea } from '../SharedFormFields/Textarea';

const Wrapper = styled.div`
  & > :first-child {
    margin-bottom: 1.5rem;
  }
`;

export function RecipePreparation({ name }) {
  return (
    <Wrapper>
      <BlockTitle title="Recipe Preparation" />
      <Textarea name={name} withResize placeholder="Enter recipe" />
    </Wrapper>
  );
}

RecipePreparation.propTypes = {
  name: PropTypes.string.isRequired
};
