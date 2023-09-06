import React, {useState} from 'react';
import {useAppSelector} from "../../hooks/redux";
import FavoriteItem from "../../components/favorite-item/FavoriteItem";
import FilterBtns from "../../components/filter-btns/FilterBtns";

const FavoritesPage = () => {
    const favorites = useAppSelector(state => state.favorites)
    const [filterTerm, setFilterTerm] = useState('')
    const filterRecipe = (value: string) => {
        setFilterTerm(value)
    }
    return (
        <div className={'favorite-page'}>
            <div className="container">
                {favorites.length ? <FilterBtns filterItem={filterRecipe} /> : <></>}
                <div className={'favorite-items'}>
                    {favorites.length ? <></> : <h2>You do not have favorites yet</h2>}
                    {favorites
                        .filter(recipe => recipe.ration.includes(filterTerm))
                        .map(f => <FavoriteItem item={f} />)}
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;