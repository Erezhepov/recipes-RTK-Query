import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoriteReducer} from "./favorites/favorites.slice";
import {reducer as userReducer} from "./user/user.slice";
import {api} from "../api/api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const rootReducer = combineReducers({
    favorites: favoriteReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)