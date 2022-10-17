import {Home} from "./Pages";
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Profile/Profile'

function App() {
    return <div className="App">
        <Layout>
            <Routes>
                <Route  path="/" element={<Dashboard />} />
                <Route  path="profile/*" element={<Profile />} />
                <Route  path="/" element={<Home />} />
                <Route  path="/" element={<Home />} />
            </Routes>
        </Layout>
    </div>
}

export default App
