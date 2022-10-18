import {Home} from "./Pages";
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Profile/Profile'
import { useAppDispatch, useAppSelector } from './Hooks/rtk-hooks'
import { useEffect } from 'react'
import { getCoins } from './Store/CoinsSlice/coinsSlice'
import Coins from './Pages/Coins/Coins'
import Markets from './Pages/Markets/Markets'
import News from './Pages/News/News'

function App() {
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(getCoins())
    }, [dispatch])

    const {coins} = useAppSelector((state) => state.coinsData)

    return <div className="App">
        <Layout>
            <Routes>
                <Route  path="/" element={<Dashboard />} />
                <Route  path="profile/*" element={<Profile />} />
                <Route  path="coins/*" element={<Coins />} />
                <Route  path="/markets" element={<Markets />} />
                <Route  path="/news" element={<News />} />
            </Routes>
        </Layout>
    </div>
}

export default App
