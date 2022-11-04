import React, {useState, useEffect} from "react";
import { ReactComponent as Search } from "../search.svg";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Burger } from "./Burger";
import { Pagination } from "./Pagination";
import { TableData } from "./TableData";

export const MainWindow = (props) => {
    const maxPagCount = [1, 2, 3, 4, 5, 6, 7, 8];
    const [pag, setPag] = useState([...maxPagCount]);
    const [current, setCurrent] = useState(1);
    const [pagsize, setPagsize] = useState(pag.length);
    const [maxCountData, setMaxCountData] = useState();
    const [data, setData] = useState([]);
    const [block, setBlock] = useState(false);
    useEffect(()=>{
        const url_info = `https://dummyjson.com/${props.category.toLowerCase()}`;
        const fetchData_info = async () => {
            try {
                const response = await fetch(url_info);
                const json = await response.json();
                setMaxCountData(Math.ceil(json.total/8));
                Math.ceil(json.total/8)>8 ? setPag([...maxPagCount]) : setPag([...maxPagCount.slice(0,  Math.ceil(json.total/8))])
                setCurrent(1)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData_info();
    }, [props.category])
    useEffect(()=>{
        const url = `https://dummyjson.com/${props.category.toLowerCase()}?limit=${pagsize}&skip=${8*current - 8}`;
        const fetchData = async () => {
            try {
                setBlock(true);
                const response = await fetch(url);
                const json = await response.json();
                setData([...json[props.category.toLowerCase()]]);
                setBlock(false);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [props.category, current])
    return(
        <div className="main-wrapper">
            <div className="header">
                <Burger sideMenu={props.sideMenu} setSideMenu={props.setSideMenu}/>
                <div className="hello-user">Hello <span>Evano</span> 👋🏼,</div>
            </div>
            <div className="hello-information">API data from <a target="_blank" href="https://dummyjson.com/">https://dummyjson.com/</a></div>
            <div className="window-wrapper">
                <div className={block? "main-window-blocked active": "main-window-blocked"}>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
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
                <TableData data={data} category={props.category}/>
                <div className="window__result-pagination-wrapper">
                    <div className="window__show-results">Showing data <span>1</span> to <span>8</span> of <span>256K</span> entries</div>
                    <Pagination pag={pag} setPag={setPag} current={current} setCurrent={setCurrent} pagsize={pagsize} setPagsize={setPagsize} maxCountData={maxCountData} setMaxCountData={setMaxCountData}/>
                </div>
            </div>
        </div>
    )
}