import React, {useState} from 'react';
import RecipeItem from "../../components/recipe-item/RecipeItem";
import {api} from "../../api/api";
import SearchItem from "../../components/search-item/SearchItem";
import FilterBtns from "../../components/filter-btns/FilterBtns";

const RecipesPage = () => {
    const [queryTerm, setQueryTerm] = useState('')
    const [filterTerm, setFilterTerm] = useState('')
    const {isLoading, error, data: recipes} = api.useGetRecipesQuery(null)
    const searchRecipe = (value: string) => setQueryTerm(value)
    const filterRecipe = (value: string) => {
        setFilterTerm(value)
    }
    return (
        <div className={'recipes'}>
            <div className="container">
                {isLoading && <div>Loading...</div>}
                {error && <div>Error</div>}
                <h1>Recipes</h1>
                <SearchItem findItem={searchRecipe} />
                <FilterBtns filterItem={filterRecipe} />
                <div className={'recipe-items'}>
                    {recipes && recipes
                        .filter(recipe => recipe.ration.includes(filterTerm) && recipe.name.includes(queryTerm))
                        .map(recipe => <RecipeItem key={recipe.id} item={recipe} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecipesPage;