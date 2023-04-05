import { configureStore } from '@reduxjs/toolkit';
import { mainRecipeReduser } from './mainRecipes/slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);