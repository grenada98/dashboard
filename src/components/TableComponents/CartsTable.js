import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { InputSearch } from "../InputSearch";
import { PaginatedItems } from "../PaginatedItems";
import { fetchData } from "../../utils/fetchData";

export const CartsTable = (props) => {
    const [block, setBlock] = useState(false);
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({ currentPage: 1, perPage: 8, totalPages: Math.ceil(data.length/8)})
    let startIndex = (pagination.currentPage - 1) * pagination.perPage;
    let endIndex = startIndex + pagination.perPage;
    const currentData = data.slice(startIndex, endIndex)
    let totalpages = Math.ceil(data.length/8);
    useEffect(()=>{
        setBlock(true)
        fetchData("Carts").then((data)=>{
            setData([...data])
        }).finally(()=>setBlock(false))
      }, [props.category])
    useEffect(()=>{
        console.log("Выбрано с " + startIndex + " по " + endIndex + ". Выбранная страница " + pagination.currentPage)
    }, [pagination])
    const tableHeaderData = ["Title", "Price", "Quantity", "Stock"]
    return(
        <div className="window-wrapper">
            <div className={block? "main-window-blocked active": "main-window-blocked"}>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

            <div className="window-header__wrapper">
                <div className="window-header__wrapper-title">
                    <div className='window-header__title'>All {props.category}</div>
                    <div className="window-header__subtitle">Active members</div>
                </div>
                <InputSearch/>
            </div>
            {data.length? <Table withbasestyles={{breakpoint: '45em'}}  className="window__information-table">
            <Thead>
                <Tr className="window__information-table-header">
                    {tableHeaderData.map((item, i)=>{
                        return (<Th key={i}>{item}</Th>)
                    })}
                </Tr>
            </Thead>
            {currentData.length?
            <Tbody>
                {   currentData.map((elem) =>{
                        // console.log(props.paginationSettings.currentData.length)
                        // console.log(elem)
                        return(
                            <Tr key={elem['id']}>
                                <Td>{elem?.['products']?.[1]['title']}</Td>
                                <Td>{elem?.['products']?.[1]['price']}</Td>
                                <Td>{elem?.['products']?.[1]['quantity']}</Td>
                                <Td>{elem?.['products']?.[1]['total']}</Td>
                            </Tr>
                        )
                })
                }
            </Tbody> : null}
        </Table>: null}
        <div className="window__result-pagination-wrapper">
                <div className="window__show-results">Showing data <span>1</span> to <span>8</span> of <span>256K</span> entries</div>
                <PaginatedItems category={props.category} pagination={pagination} setPagination={setPagination} totalpages={totalpages}/>
        </div>
    </div>
    )
}