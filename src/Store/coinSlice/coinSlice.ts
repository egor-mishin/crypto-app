import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { options } from '../../Services/crypto-api-options'
import { ICoinState, ICoinResponse, ICoinDetailsParams } from './coinSlice.interface'



const initialState: ICoinState = {
    coinData: null ,
    status: 'idle',
    error: null,
}

export const getCoinData = createAsyncThunk('coinData/getCoins', async (coinDetailsParams:ICoinDetailsParams, thunkAPI) => {
    try {
       const  response = await axios.request(options.getCoinDetails(coinDetailsParams.coinId, coinDetailsParams.timePeriod))
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
})

export const coinSlice = createSlice({
    name: 'coinData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCoinData.pending, (state: ICoinState) => {
                state.status = 'loading'
            })
            .addCase(getCoinData.fulfilled, (state: ICoinState, action: PayloadAction<ICoinResponse>) => {
                state.status = 'success'
                state.coinData = action.payload.data.coin
            })
            .addCase(getCoinData.rejected, (state: ICoinState, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})


export default coinSlice
