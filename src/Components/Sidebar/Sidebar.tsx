import React from "react";
import './Sidebar.css'
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import {sidebarData} from './SidebarList'
import MainTable from "../TableData/MainTable";

const Sidebar = () => {
    return(
        <div className="main-class">
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

                        <select className = "dropdown">
                            <option value="N/A">N/A</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <div className="subclass">
                   <MainTable/>
                </div>
            </div>
        </div>
    )
}
export default Sidebar