import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRecipe, IRecipeData} from "../models/recipe";

const API_URL = 'https://recipe-data.onrender.com/'

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    endpoints: (build) => ({
        getRecipes: build.query<IRecipe[], null>({
            query: () => ({
              url: `/recipes`,
              params: {
                  _sort: 'id',
                  _order: 'desc',
              }
            }),
            providesTags: () => [{
                type: 'Recipe',
            }]
        }),
        createRecipe: build.mutation<null, IRecipeData>({
            query: (recipe) => ({
                url: '/recipes',
                body: recipe,
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type: 'Recipe'
            }]
        }),
        // deleteRecipe: build.mutation({
        //     query(id: number) {
        //         return {
        //             url: `recipes/${id}`,
        //             method: 'DELETE',
        //         }
        //     },
        //     invalidatesTags: () => [{ type: 'Recipe'}],
        // }),
    })
})

export const {useCreateRecipeMutation} = api