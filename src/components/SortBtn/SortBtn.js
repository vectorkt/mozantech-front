import React from "react";

const SortBtn = ({sortOrder,btnHandler})=>{    

    const labels = {"asc":"Price Ascending","desc":"Price Descending"}
    const text = labels[sortOrder];

    return(
        <button className={"button"}  onClick={btnHandler}>{text}</button>
    )

}

export default SortBtn