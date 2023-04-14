import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { getCategoryList } from '../../../redux/mainRecipes/operations';
import { getFullCategoryList } from '../../../redux/mainRecipes/selectors';

export function CategoriesList() {
  const categories = useSelector(getFullCategoryList);
  
  const { categoryName } = useParams();
  const [value, setValue] = useState(0);
  const [mapArray, setMapArray] = useState([]);
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList());
    if (!categoryName) {
      navigate('/categories/beef');
    }
  }, [dispatch, navigate, categoryName]);

  useEffect(() => {
    if (categories.length === 0) return;

    setMapArray([...categories]);

    const idx = categories.findIndex(e => {
      return e.toLowerCase() === categoryName?.toLowerCase();
    });

    if (idx !== -1) {
      setValue(idx);
    }
  }, [categories, categoryName]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/categories/${event.target.textContent}`);
  };

  const meals = mapArray.map((e, index) => (
    <Tab
      label={e.toLowerCase()}
      key={index}
      sx={{
        padding: '0',
        paddingBottom: '28px',
        color: '#BDBDBD',
        '&.Mui-selected': {
          color: '#8BAA36',
        },
      }}
    />
  ));
  const onMouseEnter = () => {
    setFlag(true);
  };
  const onMouseLeave = () => {
    setFlag(false);
  };

  return (
    <Box
      sx={{
        maxWidth: '100%',
        bgcolor: 'transparent',
        borderBottom: 1,
        borderColor: '#E0E0E0',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Tabs
        onChange={handleChange}
        value={value}
        variant="scrollable"
        scrollButtons={true}
        aria-label="scrollable auto tabs example"
        sx={{
          '& .MuiTabs-scroller': {
            '& .css-1aquho2-MuiTabs-indicator': { backgroundColor: '#8BAA36' },
            '& .css-ttwr4n': { backgroundColor: '#8BAA36' },
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          '& .MuiTabs-flexContainer': {
            gap: '55px',
            '& :hover': {
              color: '#8BAA36',
            },
          },

          '& .MuiTab-root': {
            textTransform: 'capitalize',
            minWidth: 'unset',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '18px',
            borderColor: '#8BAA36',
          },

          '& svg': {
            opacity: `${flag ? 1 : 0}`,
            stroke: '#8BAA36',
            strokeWidth: '3px',
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
      >
        {meals}
      </Tabs>
    </Box>
  );
}
