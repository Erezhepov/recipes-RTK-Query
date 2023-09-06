import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

const fetchUserById = (userId: number): Promise<IUser> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({
                id: 1,
                name: 'Miko',
                email: 'm.erezhepoff@gmail.com'
            })
        }, 1000)
    })

export const getUserById = createAsyncThunk<IUser, number>(
    'users/by-id', async (userId: number, thunkApi) => {
        try {
            const response = await fetchUserById(userId)
            return response
        }catch (e){
            return thunkApi.rejectWithValue('Ошибка при доставании пользователя')
        }
    })