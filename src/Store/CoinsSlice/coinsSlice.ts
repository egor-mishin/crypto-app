import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { options } from '../../Services/crypto-api-options'
import { ICoinsState } from './ConisSlice.interface'



const initialState: ICoinsState = {
    coins: [],
    status: 'idle',
    error: null,
}

export const getCoins = createAsyncThunk('coinsData/getCoins', async (data, thunkAPI) => {
    try {
       const  response = await axios.request(options.coins)
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
})

export const coinsSlice = createSlice({
    name: 'coinsData',
    initialState,
    reducers: {
        getCoins: (state: ICoinsState, action) => {
            state.coins = action.payload

        },
    },
    extraReducers(builder) {
        builder
            .addCase(getCoins.pending, (state: ICoinsState) => {
                state.status = 'loading'
            })
            .addCase(getCoins.fulfilled, (state: ICoinsState, action: PayloadAction<any>) => {
                state.status = 'success'
                state.coins = action.payload.data
            })
            .addCase(getCoins.rejected, (state: ICoinsState, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})


export default coinsSlice
