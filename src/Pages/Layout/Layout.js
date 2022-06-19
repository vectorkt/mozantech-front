import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ApiTester from "../../ApiTester/ApiTester";
import MainPage from "../MainPage/MainPage";
import PartsPage from "../PartsPage/PartsPage";
import './Layout.css';


const Layout = () => {
    return (
        <>        
            <h1>Store Parts</h1>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={<MainPage />} />
                <Route path="/parts" element={<PartsPage />} />                
                {/* <Route path="/apitester" element={<ApiTester/>} />                 */}
            </Routes>
        </>
    )
};

export default Layout;