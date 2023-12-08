import React, { useEffect} from "react";
import {ReactComponent as Dashboard} from '../category_1.svg';
import {ReactComponent as Product} from '../category_2.svg';
import {ReactComponent as Customers} from '../category_3.svg';
import {ReactComponent as RightArrow} from '../chevron-right.svg'
import { NavLink } from 'react-router-dom';

export const SideList = (props) => {
    const svgIcon = {
        Carts: <Dashboard className='sidemenu__img' width='24' height='24'/>,
        Products: <Product className='sidemenu__img' width='24' height='24'/>,
        Users: <Customers className='sidemenu__img' width='24' height='24'/>,
    }
    const categoryMenu = ["Carts", "Products", "Users"];
    function onClickMenu(value){
        props.setCategory(value)
    }
    return(
        <div className='sidemenu__menu'>
            {
                categoryMenu.map((item, index) =>(
                    <NavLink key={index} className='sidemenu__menu-item' to={`/` + item} onClick={e=>{onClickMenu(item)}}>
                        <div className="sidemenu__button-title">
                            {svgIcon[item]}
                            <span className='sidemenu__text'>{item}</span>
                        </div>
                        <RightArrow className='sidemenu__img arrow' width='16' height='16'/>
                    </NavLink>
                ))
            }
        </div>
    )
}