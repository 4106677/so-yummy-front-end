import { Link } from 'react-router-dom';

import { CardImg, CardTitle, CardDish } from './CardMeal.styled';
import NoImage from '../../images/default.jpg';

export const CardMeal = ({ _id, title, preview }) => {
  return (
    <CardDish>
      <Link to={`/recipes/byId/${_id}`}>
        <CardImg src={preview ? preview : { NoImage }} alt={title} />
        <CardTitle >{title}</CardTitle>
        
      </Link>
    </CardDish>
  );
};
