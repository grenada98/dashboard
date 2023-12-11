import React, { useState } from "react";
import { ReactComponent as Search } from "../search.svg";


export const InputSearch = () => {
    const [inputValue, setInputValue] = useState('');
    return(
        <div className="search__input-wrapper">
            <Search className="search__icon" width='24' height='24'/>
            <input className="search__input" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Search"></input>
        </div>
    )
}