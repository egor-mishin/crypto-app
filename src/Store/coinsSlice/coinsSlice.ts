import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { options } from '../../Services/crypto-api-options'
import { setErrors, setStatus } from '../appInitSlice/appInitSlice'
import { ICoinsData, ICoinsState } from './conisSlice.interface'


const initialState: ICoinsState = {
    coins: [],
    favCoins: [],
    status: 'idle',
    errorCode: null,
}

export const getCoinsData = createAsyncThunk('coinsData/getCoins', async (data, thunkAPI) => {
    try {
        const response = await axios.request(options.coins)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            thunkAPI.dispatch(setStatus('failed'))
            thunkAPI.dispatch(setErrors(error.response?.status))

        }
    }
})

export const coinsSlice = createSlice({
    name: 'coinsData',
    initialState,
    reducers: {
        addToFavCoins: (state: ICoinsState, action: PayloadAction<string>) => {
            const favCoin = state.coins?.find(c => c.uuid === action.payload)
            state.favCoins = favCoin ? [...state.favCoins, favCoin] : state.favCoins
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getCoinsData.pending, (state: ICoinsState) => {
                state.status = 'loading'
            })
            .addCase(getCoinsData.fulfilled, (state: ICoinsState, action: PayloadAction<ICoinsData>) => {
                setStatus('success')
                state.coins = action.payload.data.coins
            })
    },
})

export const { addToFavCoins } = coinsSlice.actions

export default coinsSlice.reducer
