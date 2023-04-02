import PropTypes from 'prop-types';

// components
import { AddRecipeForm } from 'components/AddRecipeForm/index.jsx';
import { MainConteiner } from 'components/Container/Container.styled.jsx';
import { Socials } from 'components/Socials/index.jsx';
import { PopularRecipes } from 'components/PopularRecipes/index.jsx';

// styles
import * as Styled from './AddRecipePage.styled.js';

// hooks and utils
import { useMatchMediaQuery } from 'components/Hooks/useMatchMediaQuery.js';

//temp
import img from '../../images//icons/youtube.svg';

// mock data, DELETE once backend ready
const recipes = [
  {
    id: 1,
    title: 'Pancakes',
    description: 'Just simple banana pancakes. Very tasty. Very delicious',
    image: img
  },
  {
    id: 2,
    title: 'Pancakes',
    description: 'Just simple banana pancakes. Very tasty. Very delicious',
    image: img
  },
  {
    id: 3,
    title: 'Pancakes',
    description: 'Just simple banana pancakes. Very tasty. Very delicious',
    image: img
  },
  {
    id: 4,
    title: 'Pancakes',
    description: 'Just simple banana pancakes. Very tasty. Very delicious',
    image: img
  },
  {
    id: 5,
    title: 'Pancakes',
    description: 'Just simple banana pancakes. Very tasty. Very delicious',
    image: img
  },
  {
    id: 6,
    title: 'Pancakes',
    description: 'Just simple banana pancakes. Very tasty. Very delicious',
    image: img
  }
];

const defaultHeading = 'Add recipe';

export function AddRecipePage({ heading = defaultHeading }) {
  const { isLaptop } = useMatchMediaQuery();

  return (
    <Styled.Section>
      <MainConteiner>
        {heading ? <Styled.Heading>{heading}</Styled.Heading> : null}

        <Styled.Wrapper>
          {/* LEFT SIDE */}
          <Styled.SubWrapper1>
            <AddRecipeForm />
          </Styled.SubWrapper1>

          {/* RIGHT SIDE */}
          <Styled.SubWrapper2>
            {isLaptop ? <Socials /> : null}

            <PopularRecipes recipes={recipes} />
          </Styled.SubWrapper2>
        </Styled.Wrapper>
      </MainConteiner>
    </Styled.Section>
  );
}

AddRecipePage.propTypes = {
  heading: PropTypes.string
};
