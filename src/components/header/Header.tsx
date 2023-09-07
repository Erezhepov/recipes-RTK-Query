import React from 'react';
import {PiBowlFood} from "react-icons/pi";
import {useAppSelector} from "../../hooks/redux";
import {NavLink} from "react-router-dom";

const Header = () => {
    const favorites = useAppSelector(state => state.favorites)
    return (
        <header className={'header'}>
            <div className="container">
                <div className="header__links">
                    <NavLink to={'/'}>Recipes</NavLink>
                    <NavLink to={'/favorites'}>Favorites</NavLink>
                </div>
                <PiBowlFood className={'logo'} />
                <div className={'lengthOfFavorites'}>
                    {favorites.length}
                </div>
            </div>
        </header>
    );
};

export default Header;