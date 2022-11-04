import React, {useContext} from 'react';
import { Burger } from "./Burger";
import { SideList } from './SideList';

export const Sidemenu = (props) => {
    return(
        <div className={props.sideMenu? 'sidemenu active': 'sidemenu'}>
            <div className='sidemenu__menu-content'>
                <div className='sidemenu__header'>
                    <a className='sidemenu__logo'>
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo'></img>
                    </a>
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