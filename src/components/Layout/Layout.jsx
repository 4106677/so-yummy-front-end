import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer'

export const Layout = () => {
  return (
    <>
      <Suspense>
      <Header/>
        <Outlet />
      </Suspense>
    </>
  );
};
