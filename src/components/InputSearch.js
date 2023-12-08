import React from "react";
import { ReactComponent as Search } from "../search.svg";


export const InputSearch = (props) => {
    function onChangeInput(value){
        props.setInputValue(value)
    }
    return(
        <div className="window-header__search">
            <Search className="search-icon" width='24' height='24'/>
            <input className="window-header__input" value={props.inputValue} onChange={e => onChangeInput(e.target.value)} placeholder="Search"></input>
        </div>
    )
}