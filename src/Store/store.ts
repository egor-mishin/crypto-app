import { configureStore } from '@reduxjs/toolkit'
import  { coinsSlice } from './CoinsSlice/coinsSlice'
import marketsSlice from './Markets/MarketsSlice'


const store = configureStore({
    reducer: {
        coinsData: coinsSlice.reducer,
        marketsData: marketsSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
