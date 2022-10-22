import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { options } from '../../Services/crypto-api-options'
import { INewsItem, INewsState } from './newsSlice.interface'
import { DataForWidget } from '../../Utils'


const initialState: INewsState = {
    news: [],
    status: 'idle',
    error: null,
}

export const getNewsData = createAsyncThunk('newsData/getNews', async (data, thunkAPI) => {
    try {
        const response = await axios.request(options.news)
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
})

export const newsSlice = createSlice({
    name: 'newsData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getNewsData.pending, (state: INewsState) => {
                state.status = 'loading'
            })
            .addCase(getNewsData.fulfilled, (state: INewsState, action: PayloadAction<INewsItem[]>) => {
                state.status = 'success'
                state.news = DataForWidget(action.payload, 20)
            })
            .addCase(getNewsData.rejected, (state: INewsState, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})


export default newsSlice.reducer
