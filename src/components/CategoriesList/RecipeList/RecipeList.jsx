import { Link } from 'react-router-dom';

import { CardImg, CardTitle, CardWrap } from './RecipeList.styled';
import NoImage from '../../../images/default.jpg';

export const RecipeList = ({ _id, title, preview }) => {
  return (
    <CardWrap>
      <Link to={`/recipes/byId/${_id}`}>
        <CardImg src={preview ? preview : { NoImage }} alt={title} />
        <CardTitle >{title}</CardTitle>
        
      </Link>
    </CardWrap>
  );
};






