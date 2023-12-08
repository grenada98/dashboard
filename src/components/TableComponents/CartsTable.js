import React, { useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { InputSearch } from "../InputSearch";
import { PaginatedItems } from "../PaginatedItems";

export const CartsTable = (props) => {
    useEffect(()=>{
        props.paginationSettings.data.map((elem)=>{
          console.log(elem)
        })
      }, [props.paginationSettings.data])
    const tableHeaderData = ["Title", "Price", "Quantity", "Stock"]
    return(
        <div className="window-wrapper">
            <div className={props.block? "main-window-blocked active": "main-window-blocked"}>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

            <div className="window-header__wrapper">
                <div className="window-header__wrapper-title">
                    <div className='window-header__title'>All {props.category}</div>
                    <div className="window-header__subtitle">Active members</div>
                </div>
                <InputSearch/>
            </div>
            {props.paginationSettings.data.length? <Table withbasestyles={{breakpoint: '45em'}}  className="window__information-table">
            <Thead>
                <Tr className="window__information-table-header">
                    {tableHeaderData.map((item, i)=>{
                        return (<Th key={i}>{item}</Th>)
                    })}
                </Tr>
            </Thead>
            <Tbody>
                {   props.paginationSettings.currentData.map((elem, index) =>{
                        // console.log(props.paginationSettings.currentData.length)
                        // console.log(elem)
                        return(
                            <Tr key={index}>
                                <Td>{elem?.['products']?.[1]['title']}</Td>
                                <Td>{elem?.['products']?.[1]['price']}</Td>
                                <Td>{elem?.['products']?.[1]['quantity']}</Td>
                                <Td>{elem?.['products']?.[1]['total']}</Td>
                            </Tr>
                        )
                })
                }
            </Tbody>
        </Table>: null}
        <div className="window__result-pagination-wrapper">
                <div className="window__show-results">Showing data <span>1</span> to <span>8</span> of <span>256K</span> entries</div>
                <PaginatedItems paginationSettings={props.paginationSettings} setPaginationSettings={props.setPaginationSettings}/>
        </div>
    </div>
    )
}