import React from "react"

const TypeBtn = ({ btnText, btnHandler }) => {

    return (
        <button className={"button"} onClick={btnHandler}>{btnText}</button>
    )
}

export default TypeBtn