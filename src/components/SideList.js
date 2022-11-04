import React, { useEffect} from "react";
import {ReactComponent as Dashboard} from '../category_1.svg';
import {ReactComponent as Product} from '../category_2.svg';
import {ReactComponent as Customers} from '../category_3.svg';

export const SideList = (props) => {
    function onHandle(e, item){
        for(let i = 0; i < document.getElementsByClassName('sidemenu__menu-item').length; i++){
            if(document.getElementsByClassName('sidemenu__menu-item')[i].classList.contains("active")){
                document.getElementsByClassName('sidemenu__menu-item')[i].classList.remove("active");
            }
        }
        e.target.classList.add("active");
        props.setCategory(item.toLowerCase());
    }
    const svgIcon = {
        Carts: <Dashboard className='sidemenu__img' width='24' height='24'/>,
        Products: <Product className='sidemenu__img' width='24' height='24'/>,
        Users: <Customers className='sidemenu__img' width='24' height='24'/>,
    }
    const categoryMenu = ["Carts", "Products", "Users"];
    return(
        <div className='sidemenu__menu'>
            {
                categoryMenu.map((item, i) =>(
                    <div key={i} className={props.category==item.toLowerCase() ? 'sidemenu__menu-item active': 'sidemenu__menu-item'} onClick={e => onHandle(e, item)}>
                        {svgIcon[item]}
                        <span className='sidemenu__text'>{item}</span>
                    </div>
                ))
            }
        </div>
    )
}