import { CategoriesList } from 'components/CategoriesList/CategoriesList/CategoriesList';

import { CatigoryHeader, DecorativeSquare } from './CategoriesPage.styled';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function CategoriesPage() {
  return (
    <>
      <Container>
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
        <CatigoryHeader>Categories</CatigoryHeader>
        <CategoriesList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default CategoriesPage;
