import { configureStore } from '@reduxjs/toolkit'
import  { coinsSlice } from './coinsSlice/coinsSlice'
import marketsSlice from './marketsSlice/marketsSlice'
import globalStatsSlice from './globalStatsSlice/globalStatsSlice'
import { newsSlice } from './newsSlice/newsSlice'
import coinSlice from './coinSlice/coinSlice'
import appInitSlice from './appInitSlice/appInitSlice'
import profileSlice from './profileSlice/profileSlice'


const store = configureStore({
    reducer: {
        coinsData: coinsSlice.reducer,
        marketsData: marketsSlice.reducer,
        statsData: globalStatsSlice.reducer,
        newsData: newsSlice.reducer,
        coinData: coinSlice.reducer,
        profileData: profileSlice.reducer,
        appInit: appInitSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
