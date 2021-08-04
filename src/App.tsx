import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar/Sidebar";
import AllVendor from "./Components/Vendors/AllVendor";
import AllVendorsList from "./Components/Vendors/AllVendorsList";
import CnbTitle from "./CnbTop/CnbTitle";
import Footer from "./Components/Footer/Footer";

function App() {
    const [active, setActive] = useState('0')
    return (
        <Router>
            {active === '0' && <div><Navbar/>
                <CnbTitle/>
                <div id="home" onClick={()=>setActive('1')}>
                    <AllVendor data={AllVendorsList} cardIndex={0}/>
                    <AllVendor data={AllVendorsList} cardIndex={1}/>
                    <AllVendor data={AllVendorsList} cardIndex={2}/>
                    <Footer/>
                </div>
                </div>}
            {active === '1' &&
            <div>
                <Navbar/>
                <Sidebar/>
            </div>
            }
        </Router>
    );
}

export default App;