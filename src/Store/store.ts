import { configureStore } from '@reduxjs/toolkit'
import  { coinsSlice } from './coinsSlice/coinsSlice'
import marketsSlice from './marketsSlice/marketsSlice'
import globalStatsSlice from './globalStatsSlice/globalStatsSlice'
import { newsSlice } from './newsSlice/newsSlice'


const store = configureStore({
    reducer: {
        coinsData: coinsSlice.reducer,
        marketsData: marketsSlice.reducer,
        statsData: globalStatsSlice.reducer,
        newsData: newsSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
