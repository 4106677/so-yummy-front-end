// import axios from "axios";
import { CategoriesPageItem } from "components/CategoriesPageItem/CategoriesPageItem";
import { CatigoryHeader } from "./CategoriesPage.styled";
import { MainConteiner } from "components/Container/Container.styled";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import useMediaQuery from 'components/Hooks/useMediaQuery';
// import { useState } from 'react';
// import { useEffect } from 'react';

// import { Loader } from 'components/Loader/Loader'


// const BASE_URL = 'https://recipes-becend-49lg.onrender.com/';

// const getAllCategoryList = async (name) => {
//   const response = await axios.get(`${BASE_URL}recipes/category-list/${name}`);
//   return response;
// };

// const getAllRecipesByCategory = async category => {
//   const data = await axios.get(`${BASE_URL}recipes/byCategory/${category}`)
//     return data;
//   };




export function CategoriesPage() {


    
    return (
      <div>
            <MainConteiner>
                <Header />
          <CatigoryHeader>Categories</CatigoryHeader>
                <CategoriesPageItem />
                <Footer />
        </MainConteiner>
      </div>
    );
}





