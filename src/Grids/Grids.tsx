import React from 'react'
import { Link } from "react-router-dom";
import "./Grids.css"
import { GridList} from "../Grids/GridList"

const Grid = () => {
    return (
        <div className="main-container">
            {GridList.map((itemInfo) => {
                return (
                    <p>{itemInfo.title}</p>)
            })}           
       </div>
    )
}
export default Grid