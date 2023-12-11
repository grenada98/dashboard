import React, {useState, useEffect} from "react";
import { Table, Thead, Tbody, Th, Tr, Td } from 'react-super-responsive-table';
import { InputSearch } from "../InputSearch";
import { PaginatedItems } from "../PaginatedItems";
import { fetchData } from "../../utils/fetchData";

export const UsersTable = (props) => {
    const [block, setBlock] = useState(false);
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({ currentPage: 1, perPage: 8, totalPages: 0})
    let startIndex = (pagination.currentPage - 1) * pagination.perPage;
    let endIndex = startIndex + pagination.perPage;
    const currentData = data.slice(startIndex, endIndex)
    useEffect(()=>{
        setBlock(true)
        fetchData("Users").then((data)=>{
            setData([...data])
        }).finally(()=>setBlock(false))
      }, [props.category])
    useEffect(()=>{
        setPagination({...pagination, totalPages: Math.ceil(data.length/8)})
    }, [data])
    const tableHeaderData = ["Customer Name", "Company", "Phone Number", "Email", "City", "Status"]
    return(
        <div className="main__container">
            <div className={`main__container-blocked ${block? 'active': ''}`}>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

            <div className="main__header-wrapper">
                <div className="main__header-title-container">
                    <div className='main__header-title'>All {props.category}</div>
                    <div className="main__header-subtitle">Active members</div>
                </div>
                <InputSearch/>
            </div>
            <Table withbasestyles={{breakpoint: '100em'}}  className="main__information-table">
            <Thead>
                <Tr className="main__information-table-header">
                    {tableHeaderData.map((item, i)=>{
                        return (<Th key={i}>{item}</Th>)
                    })}
                </Tr>
            </Thead>
            {currentData.length?
            <Tbody>
                {   currentData.map((elem) =>{
                        return(
                            <Tr key={elem['id']}>
                                <Td className="users">{elem['firstName']}</Td>
                                <Td className="users">{elem?.['company']?.['name']}</Td>
                                <Td className="users">{elem['phone']}</Td>
                                <Td className="users">{elem['email']}</Td>
                                <Td className="users">{elem?.['address']?.['city']}</Td>
                                <Td className="users"><div className={elem['gender'] == "male" ? "status" :"status active" }>{elem['gender'] == "male" ? "Inactive" :"Active"}</div></Td>
                            </Tr>
                        )
                })
                }
            </Tbody>: null}
        </Table>
        <div className="main__result-pagination-wrapper">
                <div className="main__show-results">Showing data {startIndex+1} to {endIndex > data.length ? data.length : endIndex} of {data.length} entries</div>
                <PaginatedItems category={props.category} pagination={pagination} setPagination={setPagination}/>
        </div>
    </div>
    )
}