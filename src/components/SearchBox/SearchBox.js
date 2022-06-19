import React from "react";



const SearchBox = ({searchValue,searchHandler}) => {

    return (
        <input type="text" placeholder="Search..." 
        value={searchValue} 
        onChange={e=>{searchHandler(e.target.value)}}/>
    )

}

export default SearchBox;