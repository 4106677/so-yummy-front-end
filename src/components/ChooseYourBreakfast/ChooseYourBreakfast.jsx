import {
  ChooseBlock,
  ChooseLink,
  ChooseSpan,
  ChooseText,
  RightArrow,
} from './ChooseYourBreakfast.styles';
import {scrollToTop} from '../../services/TheMealAPI'

export const ChooseYourBreakfast = () => {
  return (
    <ChooseBlock>
      <ChooseText>
        <ChooseSpan>Delicious and healthy &nbsp;</ChooseSpan>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </ChooseText>
      <ChooseLink to={'/categories/breakfast'} onClick={scrollToTop}>
        See recipes
        <RightArrow
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5"
            stroke="#3E4462"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </RightArrow>
      </ChooseLink>
    </ChooseBlock>
  );
};
