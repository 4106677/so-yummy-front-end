import { ListWrap } from "./SearchedRecipesList.styled";

export const SearchedRecipesList = ({ items}) => {
console.log(items);
  
  return (
    <div>
      <ListWrap>
        {items.map(item => (
          <li key={item.id}>
            <img src={items.photo} alt={items.titles}></img>
            <p>{item.titles}</p>
          </li>
        ))}
      </ListWrap>
    </div>
  );
}