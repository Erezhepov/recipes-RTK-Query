import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRecipe} from "../../models/recipe";

type TFavoritesState = IRecipe[]

const initialState: TFavoritesState = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, {payload}: PayloadAction<IRecipe>) => {
            if (state.some((f: IRecipe) => f.id === payload.id)) return
            state.push(payload)
        },
        deleteFromFavorites: (state, action: PayloadAction<IRecipe>) => {
            const index = state.findIndex((item: IRecipe) => item.id === action.payload.id)
            if (index !== -1){
                state.splice(index, 1)
            }
        }
    }
})

export const {actions, reducer} = favoritesSlice