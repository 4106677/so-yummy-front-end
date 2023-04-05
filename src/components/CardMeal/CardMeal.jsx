import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { CardImg, CardTitle, CardDish } from './CardMeal.styled';
import NoImage from '../../images/default.jpg';

export const CardMeal = ({ _id, title, thumb }) => {
  return (
    <CardDish>
      <Link to={`/recipes/byId/${_id}`}>
        <CardImg src={thumb ? thumb : { NoImage }} alt={title} />
        <CardTitle data-tooltip-id={_id}>{title}</CardTitle>
        {title.length > 30 && (
          <Tooltip id={_id} content={title} place="bottom" noArrow="false" />
        )}
      </Link>
    </CardDish>
  );
};
