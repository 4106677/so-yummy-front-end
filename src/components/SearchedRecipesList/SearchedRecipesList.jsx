
export const SearchedRecipesList = ({ items}) => {
console.log(items);
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={items.photo} alt={items.titles}></img>
            <p>{item.titles}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}