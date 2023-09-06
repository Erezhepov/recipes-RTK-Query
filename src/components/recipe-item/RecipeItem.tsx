import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {actions} from "../../store/favorites/favorites.slice";
import {IRecipe} from "../../models/recipe";

interface IRecipeItem {
    item: IRecipe
}

const RecipeItem: FC<IRecipeItem> = ({item}) => {
    const favorites = useAppSelector(state => state.favorites)
    const dispatch = useAppDispatch()
    const defaultImage = 'https://cdn.icon-icons.com/icons2/2493/PNG/512/food_patter_icon_150227.png'
    const addItem = () => {
        dispatch(actions.addToFavorites(item))
    }
    const deleteFromFavorites = () => {
        dispatch(actions.deleteFromFavorites(item))
    }
    return (
        <div className='recipe-item'>
            {item.image ? <img src={item.image} alt=""/> : <img src={defaultImage} alt=""/>}
            <h2>{item.name}</h2>
            <div className="btns">
                {favorites.includes(item) ? <button onClick={deleteFromFavorites}>Delete from favorites</button> : <button onClick={addItem}>Add to favorites</button>}
            </div>
        </div>
    );
};

export default RecipeItem;