


export const getContentForMain = state => state.outerRecipes.mainCategories;
console.log(getContentForMain)




export const getIsError = state => state.outerRecipes.isError;
console.log(getIsError);


//  Список категорий ------------------
// возвращает массив с категориями ТОЛЬКО ИМЕНА
// использовать с функцией "getCategoryList()"
export const getFullCategoryList = state => state.outerRecipes.categoryList;
console.log(getFullCategoryList);
// ---- возвращает массив объектов с 4 или 12 рецептами по запрошенной категории
// В качестве аргумента вы ДОЛЖНЫ отправить объект с категорией и лимитом
// ---- Пример: const params = {category: 'beef', limit: 4}
// ---- Использовать с функцией "getLimitedRecipesByCategory(params)"
export const getLimitedRecipes = state =>
  state.outerRecipes.limitedRecipesByCategory;
// ------------------ ВСЕ рецепты по категориям без ОГРАНИЧЕНИЯ ------------------
// ---- возвращает массив объектов со всеми рецептами по запрошенной категории
// В качестве аргумента вы ДОЛЖНЫ отправить название категории (строка)
//   Пример: const category = 'beef';
//   Используйте с функцией "getAllRecipesByCategory(category)"
export const getAllRecipes = state => state.outerRecipes.allRecipesByCategory;

// ------------------ ONE Recipe ------------------
// ---- возвращает ОБЪЕКТ с полной информацией о рецепте
// В качестве аргумента вы ДОЛЖНЫ отправить идентификатор рецепта
//   Используйте с функцией "getOneRecipeById(id)"
export const getSingleRecipe = state => state.outerRecipes.singleRecipe;
// ------------------ Popular Recipes ------------------
// ---- возвращает массив объектов
  // Используйте с функцией "getPopularRecipes()"
export const getPopular = state => state.outerRecipes.popularRecipes;
console.log(getPopular);

// ------------------ Recipes by Query ------------------
// ---- возвращает объект с ключами: meals и totalHits
  // В качестве аргумента вы ДОЛЖНЫ отправить запрос (строка)
  // Используйте с функцией "getRecipesByQuery(query)"
export const getRecipesBySearchQuery = state =>
  state.outerRecipes.recipesByQuery.meals;

// ------------------ Additional ------------------
export const getIsCategoryFetching = state =>
  state.outerRecipes.isCategoryFetching;
