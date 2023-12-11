import React from "react";

export const Logo = () => {
    return(
        <div className='sidemenu__logo'>
            <img className="sidemenu__logo-img" src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
        </div>
    )
}