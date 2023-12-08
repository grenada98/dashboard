import React, {useEffect} from "react";
import { Table, Thead, Tbody, Th, Tr, Td } from 'react-super-responsive-table';
import { InputSearch } from "../InputSearch";
import { PaginatedItems } from "../PaginatedItems";

export const UsersTable = (props) => {
    const tableHeaderData = ["Customer Name", "Company", "Phone Number", "Email", "City", "Status"]
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
            <Table withbasestyles={{breakpoint: '45em'}}  className="window__information-table">
            <Thead>
                <Tr className="window__information-table-header">
                    {tableHeaderData.map((item, i)=>{
                        return (<Th key={i}>{item}</Th>)
                    })}
                </Tr>
            </Thead>
            <Tbody>
                {   props.paginationSettings.data.map((elem, index) =>{
                        return(
                            <Tr key={index}>
                                <Td>{elem['firstName']}</Td>
                                <Td>{elem?.['company']?.['name']}</Td>
                                <Td>{elem['phone']}</Td>
                                <Td>{elem['email']}</Td>
                                <Td>{elem?.['address']?.['city']}</Td>
                                <Td><div className={elem['gender'] == "male" ? "status" :"status active" }>{elem['gender'] == "male" ? "Inactive" :"Active"}</div></Td>
                            </Tr>
                        )
                })
                }
            </Tbody>
        </Table>
        <div className="window__result-pagination-wrapper">
                <div className="window__show-results">Showing data <span>1</span> to <span>8</span> of <span>256K</span> entries</div>
                {/* <Pagination pag={pag} setPag={setPag} current={current} setCurrent={setCurrent} pagsize={pagsize} setPagsize={setPagsize} maxCountPages={maxCountPages} setMaxCountPages={setMaxCountPages}/> */}
                <PaginatedItems paginationSettings={props.paginationSettings} setPaginationSettings={props.setPaginationSettings}/>
        </div>
    </div>
    )
}