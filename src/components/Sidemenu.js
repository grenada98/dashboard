import React, {useEffect, useRef} from 'react';
import { Burger } from "./Burger";
import { SideList } from './SideList';
import { NavLink, Route, Routes } from 'react-router-dom';
import {useClickOutside} from './useClickOutside';
import { Logo } from './Logo';

export const Sidemenu = (props) => {
    const modalRef = useRef()

    useClickOutside(modalRef, props.setSideMenu)

    return(
        <div ref={modalRef} className={`sidemenu ${props.sideMenu? "active": ""}`}>
            <div className='sidemenu__menu-content'>
                <div className='sidemenu__header'>
                    <NavLink to="/">
                        <Logo/>
                    </NavLink>
                    <Burger sideMenu={props.sideMenu} setSideMenu={props.setSideMenu} />
                </div>
                <SideList setCategory={props.setCategory} category={props.category}/>
            </div>
            <a className='sidemenu__user-profile'>
                <div className='sidemenu__user-photo'>
                    <img src={process.env.PUBLIC_URL + '/img/user.jpg'} alt='user-avatar'></img>
                </div>
                <div className='sidemenu__user-information'>
                    <div className='sidemenu__user-name'>Evano</div>
                    <div className='sidemenu__user-position'>Project Manager</div>
                </div>
            </a>
        </div>
    )
}