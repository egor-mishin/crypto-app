import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { options } from '../../Services/crypto-api-options'
import { ICoinsData, ICoinsState } from './conisSlice.interface'



const initialState: ICoinsState = {
    coins: [],
    status: 'idle',
    error: null,
}

export const getCoinsData = createAsyncThunk('coinsData/getCoins', async (data, thunkAPI) => {
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
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCoinsData.pending, (state: ICoinsState) => {
                state.status = 'loading'
            })
            .addCase(getCoinsData.fulfilled, (state: ICoinsState, action: PayloadAction<ICoinsData>) => {
                state.status = 'success'
                state.coins = action.payload.data.coins
            })
            .addCase(getCoinsData.rejected, (state: ICoinsState, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})


export default coinsSlice.reducer
