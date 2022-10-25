import React, { useEffect } from "react";
import {ReactComponent as Dashboard} from '../category_1.svg';
import {ReactComponent as Product} from '../category_2.svg';
import {ReactComponent as Customers} from '../category_3.svg';
import {ReactComponent as Income} from '../category_4.svg';
import {ReactComponent as Promote} from '../category_5.svg';
import {ReactComponent as Help} from '../category_6.svg';

export const SideList = (props) => {
    useEffect(()=>{
    }, [props.category])
    function onHandle(e, item){
        console.log("Now is " + item);
        for(let i = 0; i < document.getElementsByClassName('sidemenu__menu-item').length; i++){
            if(document.getElementsByClassName('sidemenu__menu-item')[i].classList.contains("active")){
                document.getElementsByClassName('sidemenu__menu-item')[i].classList.remove("active");
            }
        }
        e.target.classList.add("active");
        props.setCategory(item);
    }
    const svgIcon = {
        Dashboard: <Dashboard className='sidemenu__img' width='24' height='24'/>,
        Product: <Product className='sidemenu__img' width='24' height='24'/>,
        Customers: <Customers className='sidemenu__img' width='24' height='24'/>,
        Income: <Income className='sidemenu__img' width='24' height='24'/>,
        Promote: <Promote className='sidemenu__img' width='24' height='24'/>,
        Help: <Help className='sidemenu__img' width='24' height='24'/>
    }
    const categoryMenu = ["Dashboard", "Product", "Customers", "Income", "Promote", "Help"];
    return(
        <div className='sidemenu__menu'>
            {
                categoryMenu.map((item, i) =>(
                    <div key={i} className='sidemenu__menu-item' onClick={e => onHandle(e, item)}>
                        {svgIcon[item]}
                        <span className='sidemenu__text'>{item}</span>
                    </div>
                ))
            }
        </div>
    )
}