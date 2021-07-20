import React from 'react'
import { Grid } from "@material-ui/core";
import './Grids.css'
//import CnbTitle from "../CnbTop/CnbTitle";
import { GridList } from "./GridList";

const GridShow = () => {
    return (
        <div>
            {GridList.map((items) => {
                return (
                    <Grid className="container" lg={12} item container spacing={2}>
                        <Grid item lg={3} md={6} xs={12}><h1 className="blocks">{items.title}</h1><h2>{items.description}</h2></Grid>
                        <Grid item lg={3} md={6} xs={12}><h1 className="blocks">{items.title}</h1><h2>{items.description}</h2></Grid>
                        <Grid item lg={3} md={6} xs={12}><h1 className="blocks">{items.title}</h1><h2>{items.description}</h2></Grid>
                        <Grid item lg={3} md={6} xs={12}><h1 className="blocks">{items.title}</h1><h2>{items.description}</h2></Grid>
                    </Grid>
                )
            })}

        </div>
    )
}
    export default GridShow