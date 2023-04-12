import { NavLink } from "react-router-dom";
import {
  CardWrapper,
  CardImg,
  CardTitle,
  CardWrap,
  RecipeTitleWrapper,
} from "./RecipeList.styled";
import defaultImg from "../../../images/default.jpg";

export function RecipeList({ array }) {
  return (
    <CardWrapper>
      {array.map(({ _id, title, thumb }) => (
        <CardWrap key={_id}>
          <NavLink to={`/recipe/${_id}`}>
            <CardImg
              src={thumb ? thumb : defaultImg}
              alt={title}
              loading="lazy"
            />
            <RecipeTitleWrapper>
              <CardTitle>{title}</CardTitle>
            </RecipeTitleWrapper>
          </NavLink>
        </CardWrap>
      ))}
    </CardWrapper>
  );
};






















// import { Link } from 'react-router-dom';

// import { CardWrapper, CardImg, CardTitle, CardWrap } from './RecipeList.styled';
// import NoImage from '../../../images/default.jpg';

// export const RecipeList = ({ meals = [] }) => {
//   console.log(meals);
//   const recipeCreator = meals.map(({ _id, title, preview }) => (
//                 <CardWrap key={_id}>
//                   <Link to={`/recipes/byId/${_id}`}>
//                     <CardImg
//                       src={preview ? preview : NoImage }
//                       alt={title}
//                     />
//                     <CardTitle>{title}</CardTitle>
//                   </Link>
//                 </CardWrap>
//               ))

//   return (
//     <>
//           <CardWrapper>{recipeCreator}</CardWrapper>
//     </>
//   );
// };






