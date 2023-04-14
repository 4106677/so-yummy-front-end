import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { mainRecipeReduser } from './mainRecipes/slice';
import { authReducer } from './auth/slice';
import { updateReducer } from './header/slice';
import { persistedFavorites } from './favorite/slice';
import { persistedShoppingList } from './shoppingList/slice';
import { searchReducer } from './search/searchSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const outerRecipesPersistConfig = {
  key: 'outerRecipes',
  storage,
  whitelist: ['mainCategories', 'categoryList', 'popularRecipes'],
};

const persistedOuterRecipesReducer = persistReducer(
  outerRecipesPersistConfig,
  mainRecipeReduser
);
const searchPersistConfig = {
  key: 'search',
  storage,
};

const persistedSearchReducer = persistReducer(
  searchPersistConfig,
  searchReducer
);

export const store = configureStore({
  reducer: {
    outerRecipes: persistedOuterRecipesReducer,
    auth: authReducer,
    recipe: mainRecipeReduser,
    update: updateReducer,
    favorite: persistedFavorites,
    shoppingList: persistedShoppingList,
    search: persistedSearchReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
