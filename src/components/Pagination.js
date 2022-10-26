import React, { useEffect, useState } from "react";
import {ReactComponent as Arrow} from "../arrow.svg";

export const Pagination = (props) => {
    useEffect(()=>{
    }, [props.pag, props.current]);
    function paginationHandleRight(){
        if(props.current===props.maxCountData){
            props.setCurrent(props.current);
        }
        else{
            if(props.pag[props.pag.length - 1]<props.current + 1){
                props.setPag(props.pag.map((item)=>(item + props.pagsize)).filter((item)=>item <= props.maxCountData));
                props.setCurrent(props.current + 1);

            }
            else{
                props.setCurrent(props.current + 1);
            }
        }
    }
    function paginationHandleLeft(){
        if(props.current===1){
            props.setCurrent(props.current);
        }
        else{
            if(props.pag[0]>props.current - 1){
                if(props.pagsize==props.pag.length){
                    props.setPag(props.pag.map((item)=>(item - props.pagsize)));
                    props.setCurrent(props.current - 1);
                }
                else{
                    let temp = [];
                    temp.push(...props.pag);
                    for(let i = 1; i <= props.pagsize - props.pag.length; i++){
                        temp.push(props.pag[props.pag.length - 1] + i);
                    }
                    props.setPag(temp.map((item) => (item - props.pagsize)));
                    props.setCurrent(props.current - 1);
                }
            }
            else{
                props.setCurrent(props.current - 1);
            }
        }
    }
    function setActive(e){
        for (let i = 0; i < document.getElementsByClassName('window__pagination-button').length; i++){
            document.getElementsByClassName('window__pagination-button')[i].classList.remove("active");
        }
        e.target.classList.add("active");
        props.setCurrent(parseInt(e.target.innerText));
    }
    return(
        <div className="window__pagination">
            <button className="window__pagination-button-prev" onClick={paginationHandleLeft}>
                <Arrow className="window__arrow-left"/>
            </button>
            {
                props.pag.map((item, i)=>{
                    return <button key={i} className={item==props.current?"window__pagination-button active": "window__pagination-button"} onClick={setActive}>{item}</button>
                })
            }
            <button className="window__pagination-button-next" onClick={paginationHandleRight}>
                <Arrow className="window__arrow-right"/>
            </button>
        </div>
    )
}