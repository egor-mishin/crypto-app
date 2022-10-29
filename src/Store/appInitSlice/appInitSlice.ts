import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppInitState } from './appInitSlice.interface'
import { getCoinsData } from '../coinsSlice/coinsSlice'
import { getMarketsData } from '../marketsSlice/marketsSlice'
import { getStatsData } from '../globalStatsSlice/globalStatsSlice'
import { getNewsData } from '../newsSlice/newsSlice'


const initialState: IAppInitState = {
    appInitStatus: 'idle',
    errorCode: null,
}

export const appInit = createAsyncThunk('appInit/appInit', async (data, thunkAPI) => {
    try {
        const response =
        await thunkAPI.dispatch(getCoinsData())
        await thunkAPI.dispatch(getMarketsData())
        await thunkAPI.dispatch(getStatsData())
        await thunkAPI.dispatch(getNewsData())

        return response
    } catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
})

export const appInitSlice = createSlice({
    name: 'appInit',
    initialState,
    reducers: {
        setErrors: (state, action) => {
            state.errorCode = action.payload
        },

        setStatus: (state, action) => {
            state.appInitStatus = action.payload
        },

    },
    extraReducers(builder) {
        builder
            .addCase(appInit.pending, (state: IAppInitState) => {
                state.appInitStatus = 'loading'
            })
            .addCase(appInit.fulfilled, (state: IAppInitState) => {
                if (!state.errorCode) {
                    state.appInitStatus = 'success'
                }
            })
    },
})


export const { setErrors, setStatus } = appInitSlice.actions
export default appInitSlice
