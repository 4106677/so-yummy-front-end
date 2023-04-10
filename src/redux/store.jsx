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
import { favoriteReducer } from './favorite/slice';

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

export const store = configureStore({
  reducer: {
    outerRecipes: persistedOuterRecipesReducer,
    auth: authReducer,
    recipe: mainRecipeReduser,
    update: updateReducer,
    favorites: favoriteReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
