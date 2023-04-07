import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};
