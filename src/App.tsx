import { Coins, Dashboard, Markets, Profile, News } from './Pages'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import { useAppDispatch, useAppSelector } from './Hooks/rtk-hooks'
import { useEffect } from 'react'
import CoinDetails from './Pages/Coins/CoinDetails/CoinDetails'
import { appInit } from './Store/appInitSlice/appInitSlice'
import { retry } from '@reduxjs/toolkit/query'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(appInit())
    }, [dispatch])

    const { coins } = useAppSelector((state) => state.coinsData)
    const { markets } = useAppSelector((state) => state.marketsData)
    const { stats } = useAppSelector((state) => state.statsData)
    const { news } = useAppSelector((state) => state.newsData)
    const { appInitStatus, errors } = useAppSelector((state) => state.appInit)


    if (appInitStatus === 'loading') {
        return <>Loading</>
    }

    if (appInitStatus === 'failed') {
        return <>{errors[0]}</>
    }
        return <div className='App'>
            <Layout>
                <Routes>
                    <Route path='/'
                           element={<Dashboard coins={coins} stats={stats} title={'Dashboard'} news={news} />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='coins' element={<Coins coins={coins} title={'Coins'} />} />
                    <Route path={'coins'}>
                        <Route path=':coinId' element={<CoinDetails />} />
                    </Route>
                    <Route path='/markets' element={<Markets markets={markets} />} />
                    <Route path='/news' element={<News />} />
                </Routes>
            </Layout>
        </div>
}
export default App
