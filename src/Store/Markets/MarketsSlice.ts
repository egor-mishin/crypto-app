import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { options } from '../../Services/crypto-api-options'
import { IMarketsState } from './Markets.interface'




const initialState: IMarketsState = {
    markets: [],
    status: 'idle',
    error: null,
}

export const getMarketsData = createAsyncThunk('marketsData/getCoins', async (data, thunkAPI) => {
    try {
        const  response = await axios.request(options.markets)
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
})

export const coinsSlice = createSlice({
    name: 'marketsData',
    initialState,
    reducers: {
        getCoins: (state: IMarketsState, action) => {
            state.markets = action.payload

        },
    },
    extraReducers(builder) {
        builder
            .addCase(getMarketsData.pending, (state: IMarketsState) => {
                state.status = 'loading'
            })
            .addCase(getMarketsData.fulfilled, (state: IMarketsState, action: PayloadAction<any>) => {
                state.status = 'success'
                state.markets = action.payload.data
            })
            .addCase(getMarketsData.rejected, (state: IMarketsState, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})


export default coinsSlice
