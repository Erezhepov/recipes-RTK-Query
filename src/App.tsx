import React from 'react';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import RecipesPage from "./pages/recipes/RecipesPage";
import FavoritesPage from "./pages/favorites/FavoritesPage";

function App(){

  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path={'/favorites'} element={<FavoritesPage />} />
                <Route path={'/'} element={<RecipesPage />} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
