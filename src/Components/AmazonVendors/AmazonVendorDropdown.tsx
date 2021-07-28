import React from "react";
import {AmazonVendors} from "./AmazonVendors";

const AmazonVendorDropdown = () => {
    return(
        <div>
            {AmazonVendors.map((items, index)=>{
                return(
                    <p>{items.title}</p>
                    )
            })}
        </div>
    )
}
export default AmazonVendorDropdown