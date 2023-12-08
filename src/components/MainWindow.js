import React, {useState, useEffect, useRef} from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Burger } from "./Burger";
import { useClickOutside } from "./useClickOutside";
import { InputSearch } from "./InputSearch";
import { Route, Routes } from 'react-router-dom';
import {CartsTable} from '../components/TableComponents/CartsTable';
import {ProductsTable} from '../components/TableComponents/ProductsTable';
import {UsersTable} from '../components/TableComponents/UsersTable'

export const MainWindow = (props) => {
    const [block, setBlock] = useState(false);

    const [paginationSettings, setPaginationSettings] = useState(
        {
            elemSizePerPage: 8,
            maxCountPages: null,
            maxCountOfData: null,
            data: [],
            currentData: []
        }
    )
    const wrapperRef = useRef();
    useClickOutside(wrapperRef)

    useEffect(()=>{
        const url = `https://dummyjson.com/${props.category.toLowerCase()}`;
        const fetchData = async () => {
            try {
                setBlock(true);
                const response = await fetch(url);
                const json = await response.json();
                setBlock(false);
                setPaginationSettings({
                    ...paginationSettings,
                    maxCountPages: Math.ceil(json.total/8),
                    maxCountOfData: json.total,
                    data: [...json[props.category.toLowerCase()]]

                })
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [props.category])
    useEffect(()=>{
        paginationSettings.currentData.map((elem)=>{
            console.log(elem)
        })
    }, [paginationSettings])
    return(
        <div className="main-wrapper">
            <div className="header">
                <Burger sideMenu={props.sideMenu} setSideMenu={props.setSideMenu}/>
                <div className="hello-user">Hello <span>Evano</span> 👋🏼,</div>
                <Routes>
                    <Route path="/Carts" element={<CartsTable category={props.category} paginationSettings={paginationSettings} setPaginationSettings={setPaginationSettings} block={block}/>}></Route>
                    <Route path="/Products" element={<ProductsTable category={props.category} paginationSettings={paginationSettings} setPaginationSettings={setPaginationSettings} block={block}/>}></Route>
                    <Route path="/Users" element={<UsersTable category={props.category} paginationSettings={paginationSettings} setPaginationSettings={setPaginationSettings} block={block}/>}></Route>
                </Routes>
            </div>
            
        </div>
    )
}