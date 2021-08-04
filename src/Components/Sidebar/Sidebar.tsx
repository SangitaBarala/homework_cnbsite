import React, {useState} from "react";
import './Sidebar.css'
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import {sidebarData} from './SidebarList'
//import MainTable from "../TableData/MainTable";
import MainTable2 from '../TableData/MainTable2'

const Sidebar = () => {
    const [state, setState] = useState()
    const handleChange = (e: any) => {
       setState(e.target.value)
    }
    return(
        <div id="orderTable" className="main-class">
            <div className="sidebar">
                {sidebarData.map((i, key)=>{
                    return(
                        <li key={key} className="row"
                        id={window.location.pathname === i.link ? "active" : ""}
                            onClick={()=> {
                                window.location.pathname = i.link
                            }}>
                            <div id="icon">{i.icon}</div>
                            <div id="title">{i.title}</div>
                        </li>
                    )
                })}
            </div>
            <div className="subclass">
                <div className="table-sub-col">
                    <div className="closedOrderTag">
                        <h1><span>{<ArrowForward/>}</span>Closed Orders - {0}</h1>
                    </div>
                    <div className="table-top-btn">
                        <button>Refresh</button>
                        <button>Cancelled Orders</button>
                        <button>Shopify Orders</button>
                        <button>Send Tracking Number</button>
                        <select value={state} onChange={()=>handleChange} className = "dropdown">
                            <option value="N/A">N/A</option>
                            <option value="1">5</option>
                            <option value="2">10</option>
                            <option value="3">15</option>
                            <option value="4">20</option>
                        </select>
                    </div>
                </div>
                <div className="subclass">
                   {/*<MainTable/>*/}
                    <MainTable2/>
                </div>
            </div>
        </div>
    )
}
export default Sidebar