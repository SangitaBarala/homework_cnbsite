import { Link } from "react-router-dom";
import "./CnbTitle.css"
import Grids from '../Grids/Grids'

const CnbTitle = () => {
    return (
        <div className="main-container">
            <h1 className="cnbTitle">CNB Intranet</h1>
            <h2 className="cnbSubTitle">CNB Computers intranet is a place where employees can get information about processes, make development requests, create problem tickets and manage accounts.</h2>
            <button className="btn btn-primary">Go to CNB Online</button>
            <div className="grid-container">
                <Grids/>
            </div>
        </div>
    )
}
export default CnbTitle