import { configureStore } from '@reduxjs/toolkit'
import  { coinsSlice } from './CoinsSlice/coinsSlice'


const store = configureStore({
    reducer: {
        coinsData: coinsSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
