import React from "react"
import { Link } from "react-router-dom";
import './PartRow.css'

const PartRow = ({ part }) => {

    const { name, type, price } = part;

    return (
        <Link
            target="_blank" rel="noopener noreferrer"
            to={`/parts?name=${name}&type=${type}&price=${price}`}>
            <div className={"row"}>

                <span>{name}</span>
                <span>{type}</span>
                <span>{price}</span>

            </div >
        </Link>

    )

}

export default PartRow