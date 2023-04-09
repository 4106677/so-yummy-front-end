import { Container } from 'components/Container/Container';
import { DecorativeSquare } from "./FavoritePage.styled";
import 'react-toastify/dist/ReactToastify.css';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { FavoriteTitle } from "./FavoritePage.styled";
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { getAllFavoriteList } from 'services/favoriteAPI';
import { deleteFavoriteList } from 'services/favoriteAPI';

export const FavoritePage = () => {
    const [favoriteRecipe, setfavoriteRecipe] = useState([]);
    const [deleteId, setDeleteId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const fetchFavoriteRecipes = async () => {
        try {
          const data = await getAllFavoriteList();
          console.log(data);
          setfavoriteRecipe(data);
          setIsLoading(false);
        } catch ({ response }) {
          console.log(response.data);
          setIsLoading(false);
        }
      };
      fetchFavoriteRecipes();
    }, []);

    useEffect(() => {
      const fetchDeleteShoppingList = async () => {
        try {
          await deleteFavoriteList(deleteId);
          setfavoriteRecipe(prevIngredients =>
            prevIngredients.filter(({ id }) => id !== deleteId)
          );
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      if (deleteId) {
        fetchDeleteShoppingList();
      }
    }, [deleteId]);
  return (
    <div>
      <Container>
        <Header />
        <DecorativeSquare
          data-1
          color="#8BAA36"
          top="3.375rem"
          left="14.75rem"
        />
        <DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
        <DecorativeSquare
          data-3
          color="#8BAA36"
          top="4.125rem"
          right="4.5rem"
        />
        <FavoriteTitle>Favorite</FavoriteTitle>
        {isLoading && <Loader />}
        <FavoriteList items={favoriteRecipe} onClick={setDeleteId} />
        <Footer />
      </Container>
    </div>
  );
};
