import { Coins, Dashboard, Markets, Profile, News } from './Pages'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import { useAppDispatch, useAppSelector } from './Hooks/rtk-hooks'
import { useEffect } from 'react'
import { getCoinsData } from './Store/coinsSlice/coinsSlice'
import { getMarketsData } from './Store/marketsSlice/marketsSlice'
import { getStatsData } from './Store/globalStatsSlice/globalStatsSlice'
import CoinDetails from './Pages/Coins/CoinDetails/CoinDetails'
import { getNewsData } from './Store/newsSlice/newsSlice'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCoinsData())
        dispatch(getMarketsData())
        dispatch(getStatsData())
        dispatch(getNewsData())
    }, [dispatch])

    const { coins } = useAppSelector((state) => state.coinsData)
    const { markets } = useAppSelector((state) => state.marketsData)
    const { stats } = useAppSelector((state) => state.statsData)
    const { news } = useAppSelector((state) => state.newsData)


    return <div className='App'>
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard coins={coins} stats={stats} title={'Dashboard'} news={news}/>} />
                <Route path='profile' element={<Profile />} />
                <Route path='coins' element={<Coins coins={coins} title={'Coins'}/>} />
                <Route path={'coins'} >
                    <Route path=':coinId' element={<CoinDetails  />} />
                </Route>
                <Route path='/markets' element={<Markets markets={markets} />} />
                <Route path='/news' element={<News />} />
            </Routes>
        </Layout>
    </div>
}

export default App
