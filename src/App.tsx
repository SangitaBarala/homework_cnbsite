import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar/Sidebar";
import CnbTitle from './CnbTop/CnbTitle'
// import Amazon from "./Components/Vendors/Amazon/Amazon";
// import Shopify from "./Components/Vendors/Shopify/Shopify";
// import Wallmart from "./Components/Vendors/Wallmart/Wallmart";
import AllVendor from "./Components/Vendors/AllVendor";
import Footer from "./Components/Footer/Footer";
//import Grids from "./Grids/Grids";

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar/>
            <CnbTitle/>
            <AllVendor/>
            {/*<Footer/>*/}
        </Router>
    );
}

export default App;