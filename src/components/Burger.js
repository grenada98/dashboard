import React from "react";

export const Burger = (props) => {
    function openSide(){
        props.sideMenu == true? props.setSideMenu(false): props.setSideMenu(true);
    }
    return(
        <div className={props.sideMenu == true? "burger active": "burger"} onClick={openSide}>
            <div className="burger__middle-line"></div>
        </div>
    )
}