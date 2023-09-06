import {createSlice} from "@reduxjs/toolkit";
import {getUserById} from "./user.actions";

export interface IUserState {
    isLoading: boolean
    error: any
    user: any
}
const initialState: IUserState = {
    isLoading: false,
    error: null,
    user: {

    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getUserById.pending, state => {
            state.isLoading = true
            state.error = null
        })
        .addCase(getUserById.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.user = action.payload
        })
        builder.addCase(getUserById.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
    }
})

export const {actions, reducer} = userSlice