import React, { useEffect, useState } from "react";
import {ReactComponent as Arrow} from "../arrow.svg";

export const Pagination = () => {
    const [pag, setPag] = useState([1, 2, 3, 4, 5, 6, 7, 8,]);
    const [current, setCurrent] = useState(1);
    const [pagsize, setPagsize] = useState(pag.length);
    const [maxCountData, setMaxCountData] = useState(37);
    useEffect(()=>{
    }, [pag, current]);
    function paginationHandleRight(){
        if(current===maxCountData){
            setCurrent(current);
        }
        else{
            if(pag[pag.length - 1]<current + 1){
                setPag(pag.map((item)=>(item + pagsize)).filter((item)=>item <= maxCountData));
                setCurrent(current + 1);

            }
            else{
                setCurrent(current + 1);
            }
        }
    }
    function paginationHandleLeft(){
        if(current===1){
            setCurrent(current);
        }
        else{
            if(pag[0]>current - 1){
                if(pagsize==pag.length){
                    setPag(pag.map((item)=>(item - pagsize)));
                    setCurrent(current - 1);
                }
                else{
                    let temp = [];
                    temp.push(...pag);
                    for(let i = 1; i <= pagsize - pag.length; i++){
                        temp.push(pag[pag.length - 1] + i);
                    }
                    setPag(temp.map((item) => (item - pagsize)));
                    setCurrent(current - 1);
                }
            }
            else{
                setCurrent(current - 1);
            }
        }
    }
    function setActive(e){
        for (let i = 0; i < document.getElementsByClassName('window__pagination-button').length; i++){
            document.getElementsByClassName('window__pagination-button')[i].classList.remove("active");
        }
        e.target.classList.add("active");
        setCurrent(parseInt(e.target.innerText));
    }
    return(
        <div className="window__pagination">
            <button className="window__pagination-button-prev" onClick={paginationHandleLeft}>
                <Arrow className="window__arrow-left"/>
            </button>
            {
                pag.map((item, i)=>{
                    return <button key={i} className={item==current?"window__pagination-button active": "window__pagination-button"} onClick={setActive}>{item}</button>
                })
            }
            <button className="window__pagination-button-next" onClick={paginationHandleRight}>
                <Arrow className="window__arrow-right"/>
            </button>
        </div>
    )
}