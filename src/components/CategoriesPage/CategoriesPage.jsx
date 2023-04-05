
import { useState } from 'react';
import { CategoriesList } from './CategoriesList/CategoriesList';
import { RecipeList } from './RecipeList/RecipeList';
import { PageContainer, Title } from "./CategoriesPage.styled";
import { Header } from '../Header/Header';
// import { Footer } from '../Footer/Footer';

export function CategoriesPage({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = category => {
    setSelectedCategory(category.id);
  };

    return (
        <PageContainer>
            <Header/>
            <Title>Categories</Title>
            <div>
                <CategoriesList categories={categories} onCategoryClick={handleCategoryClick} />
            </div>
            <div>
                <RecipeList category={selectedCategory} />
            </div>
            {/* <Footer/> */}
        </PageContainer>
    );
};