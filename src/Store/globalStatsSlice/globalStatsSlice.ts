import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { options } from '../../Services/crypto-api-options'
import { IGlobalStatsState, IStatsData } from './globalStatsSlice.interface'




const initialState: IGlobalStatsState = {
    stats: null,
    status: 'idle',
    error: null,
}

export const getStatsData = createAsyncThunk('statsData/getStats', async (data, thunkAPI) => {
    try {
       const  response = await axios.request(options.globalStats)
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
})

export const globalStatsSlice = createSlice({
    name: 'statsData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getStatsData.pending, (state: IGlobalStatsState) => {
                state.status = 'loading'
            })
            .addCase(getStatsData.fulfilled, (state: IGlobalStatsState, action: PayloadAction<IStatsData>) => {
                state.status = 'success'
                state.stats = action.payload.data
            })
            .addCase(getStatsData.rejected, (state: IGlobalStatsState, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})


export default globalStatsSlice

