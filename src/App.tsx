import {Home} from "./Pages";
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";

function App() {
    return <div className="App">
        <Layout>
            <Routes>
                <Route  path="/" element={<Home />} />
            </Routes>
        </Layout>
    </div>
}

export default App
