import React from 'react'
import "./CnbTitle.css"
import GridShow from '../Grids/Grids'

const CnbTitle = () => {
    return (
        <div className="main-container">
            <h1 className="cnbTitle">CNB Intranet</h1>          
            <h2 className="cnbSubTitle">CNB Computers intranet is a place where employees can get information about making development requests, create problem tickets and manage accounts.</h2>
            <div>
                <img className="CnbLogoImg" src="http://cnbcom.com/wp-content/uploads/2019/11/CNB-logo-1.jpg" alt="cnbImg" />
                <button className="btn btn-warning">Go to CNB Online</button>
            </div>
           
            <div className="grid-item">
                {/*<GridShow/>*/}
            </div>
        </div>
    )
}
export default CnbTitle