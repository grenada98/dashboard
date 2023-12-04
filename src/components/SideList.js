import React, { useEffect} from "react";
import {ReactComponent as Dashboard} from '../category_1.svg';
import {ReactComponent as Product} from '../category_2.svg';
import {ReactComponent as Customers} from '../category_3.svg';
import {ReactComponent as RightArrow} from '../chevron-right.svg'

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
                    <div key={i} className={`sidemenu__menu-item ${props.category==item.toLowerCase() ? 'active': ''}`} onClick={e => onHandle(e, item)}>
                        <div className="sidemenu__button-title">
                            {svgIcon[item]}
                            <span className='sidemenu__text'>{item}</span>
                        </div>
                        <RightArrow className='sidemenu__img arrow' width='16' height='16'/>
                    </div>
                ))
            }
        </div>
    )
}