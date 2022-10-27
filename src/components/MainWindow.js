import React, {useState, useEffect} from "react";
import { ReactComponent as Search } from "../search.svg";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Burger } from "./Burger";
import { Pagination } from "./Pagination";
import { TableData } from "./TableData";

export const MainWindow = (props) => {
    const [pag, setPag] = useState([1, 2, 3, 4, 5, 6, 7, 8,]);
    const [current, setCurrent] = useState(1);
    const [pagsize, setPagsize] = useState(pag.length);
    const [maxCountData, setMaxCountData] = useState(12);
    const [data, setData] = useState([]);
    useEffect(()=>{
        const url = `https://dummyjson.com/users?limit=${pagsize}&skip=${8*current}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData([...json.users]);
                console.log(json.users);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [current])
    return(
        <div className="main-wrapper">
            <div className="header">
                <Burger sideMenu={props.sideMenu} setSideMenu={props.setSideMenu}/>
                <div className="hello-user">Hello <span>Evano</span> 👋🏼,</div>
            </div>
            <div className="window-wrapper">
                <div className="window-header__wrapper">
                    <div className="window-header__wrapper-title">
                        <div className='window-header__title'>All {props.category}</div>
                        <div className="window-header__subtitle">Active members</div>
                    </div>
                    <div className="window-header__search">
                        <Search className="search-icon" width='24' height='24'/>
                        <input placeholder="Search"></input>
                    </div>
                </div>
                <TableData data={data}/>
                <div className="window__result-pagination-wrapper">
                    <div className="window__show-results">Showing data <span>1</span> to <span>8</span> of <span>256K</span> entries</div>
                    <Pagination pag={pag} setPag={setPag} current={current} setCurrent={setCurrent} pagsize={pagsize} setPagsize={setPagsize} maxCountData={maxCountData} setMaxCountData={setMaxCountData}/>
                </div>
            </div>
        </div>
    )
}