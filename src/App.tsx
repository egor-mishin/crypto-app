import { Coins, Dashboard, Markets, Profile, News } from './Pages'
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { useAppDispatch, useAppSelector } from './Hooks/rtk-hooks'
import { useEffect } from 'react'
import { getCoinsData } from './Store/CoinsSlice/coinsSlice';
import { getMarketsData } from './Store/Markets/MarketsSlice'

function App() {
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(getCoinsData())
        dispatch(getMarketsData())
    }, [dispatch])

    const {coins} = useAppSelector((state) => state.coinsData)
    const {markets} = useAppSelector((state) => state.marketsData)

    return <div className="App">
        <Layout>
            <Routes>
                <Route  path="/" element={<Dashboard coins={coins} title={'Dashboard'}/>} />
                <Route  path="profile/*" element={<Profile />} />
                <Route  path="coins/*" element={<Coins coins={coins} title={'Coins'}/>} />
                <Route  path="/markets/*" element={<Markets />} />
                <Route  path="/news" element={<News />} />
            </Routes>
        </Layout>
    </div>
}

export default App
