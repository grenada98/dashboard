import React, {useState, useEffect, useRef} from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Burger } from "./Burger";
import { useClickOutside } from "./useClickOutside";
import { Route, Routes } from 'react-router-dom';
import {CartsTable} from '../components/TableComponents/CartsTable';
import {ProductsTable} from '../components/TableComponents/ProductsTable';
import {UsersTable} from '../components/TableComponents/UsersTable'
import { Dashboard } from "./Dashboard";

export const MainWindow = (props) => {

    const wrapperRef = useRef();
    useClickOutside(wrapperRef)

    return(
        <div className="main-wrapper">
            <div className="header">
                <Burger sideMenu={props.sideMenu} setSideMenu={props.setSideMenu}/>
                <div className="hello-user">Hello <span>Evano</span> 👋🏼,</div>
                <Routes>
                    <Route path="/" element={<Dashboard/>}></Route>
                    <Route path="/Carts" element={<CartsTable category={props.category}/>}></Route>
                    <Route path="/Products" element={<ProductsTable category={props.category}/>}></Route>
                    <Route path="/Users" element={<UsersTable category={props.category}/>}></Route>
                </Routes>
            </div>
            
        </div>
    )
}