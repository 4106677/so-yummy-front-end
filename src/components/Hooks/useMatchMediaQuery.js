import { useMediaQuery } from 'react-responsive';

export const useMatchMediaQuery = () => {
  const isLaptop = useMediaQuery({
    query: `(min-width: 1024px)`
  });

  return { isLaptop };
};
