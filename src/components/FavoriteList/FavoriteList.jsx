export const FavoriteList = ({ items, onClick }) => {
 const elements = items.map(({ _id, title, preview, description, time }) => (
   <li key={_id}>
     <img src={preview} alt="dish" />
     <div>
       <p>{title}</p>
       <p>{description}</p>
       <div>
         <div>{time} min</div>
         <img src="" alt="" />
       </div>
     </div>
   </li>
 )); 

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};
