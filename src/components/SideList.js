import React, { useEffect} from "react";
import {ReactComponent as Dashboard} from '../category_1.svg';
import {ReactComponent as Carts} from '../category_4.svg'
import {ReactComponent as Product} from '../category_2.svg';
import {ReactComponent as Customers} from '../category_3.svg';
import {ReactComponent as RightArrow} from '../chevron-right.svg'
import { NavLink } from 'react-router-dom';

export const SideList = (props) => {
    const linkSideBar = [
        {
            title: "Dashboard",
            url: "/",
            svgIcon: <Dashboard className='sidemenu__img' width='24' height='24'/>
        },
        {
            title: "Carts",
            url: "/carts",
            svgIcon: <Carts className='sidemenu__img' width='24' height='24'/>
        },
        {
            title: "Products",
            url: "/products",
            svgIcon: <Product className='sidemenu__img' width='24' height='24'/>
        },
        {
            title: "Users",
            url: "/users",
            svgIcon: <Customers className='sidemenu__img' width='24' height='24'/>
        }
    ]

    function onClickMenu(value){
        props.setCategory(value)
    }
    return(
        <div className='sidemenu__menu'>
            {
                linkSideBar.map((item, index) =>(
                    <NavLink key={index} className='sidemenu__menu-item' to={item.url} onClick={()=>{onClickMenu(item.title)}}>
                        <div className="sidemenu__button-title">
                            {item.svgIcon}
                            <span className='sidemenu__text'>{item.title}</span>
                        </div>
                        {item.title!=="Dashboard"?<RightArrow className='sidemenu__img arrow' width='16' height='16'/>: null}
                    </NavLink>
                ))
            }
        </div>
    )
}