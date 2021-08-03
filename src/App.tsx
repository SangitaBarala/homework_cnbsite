import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar/Sidebar";
import AllVendor from "./Components/Vendors/AllVendor";
import AllVendorsList from "./Components/Vendors/AllVendorsList";
import CnbTitle from "./CnbTop/CnbTitle";
import Footer from "./Components/Footer/Footer";
//import Grids from "./Grids/Grids";

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar/>
            <CnbTitle/>
            <AllVendor data={AllVendorsList} cardIndex={0}/>
            <AllVendor data={AllVendorsList} cardIndex={1}/>
            <AllVendor data={AllVendorsList} cardIndex={2}/>
            <Footer/>
        </Router>
    );
}

export default App;