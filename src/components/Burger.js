import React from "react";

export const Burger = (props) => {
    function openSide(){
        props.sideMenu == true? props.setSideMenu(false): props.setSideMenu(true);
    }
    return(
        <div className={`burger ${props.sideMenu == true? 'active': ''}`} onClick={openSide}>
            <div className="burger__middle-line"></div>
        </div>
    )
}