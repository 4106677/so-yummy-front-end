
import { CategoriesList } from "components/CategoriesList/CategoriesList/CategoriesList";
import { CatigoryHeader } from "./CategoriesPage.styled";
import { Container } from "components/Container/Container";

import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

export function CategoriesPage() {
  
    return (  
      <> 
        <Header /> 
      <Container>
            
          <CatigoryHeader>Categories</CatigoryHeader>
        
          <CategoriesList />
               
        </Container>
        <Footer /> 
      </>
    );
}





