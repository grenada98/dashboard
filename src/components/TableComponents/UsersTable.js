import React, {useState, useEffect} from "react";
import { Table, Thead, Tbody, Th, Tr, Td } from 'react-super-responsive-table';
import { InputSearch } from "../InputSearch";
import { PaginatedItems } from "../PaginatedItems";
import { fetchData } from "../../utils/fetchData";

export const UsersTable = (props) => {
    const [block, setBlock] = useState(false);
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({ currentPage: 1, perPage: 8, totalPages: Math.ceil(data.length/8)})
    let startIndex = (pagination.currentPage - 1) * pagination.perPage;
    let endIndex = startIndex + pagination.perPage;
    const currentData = data.slice(startIndex, endIndex)
    let totalpages = Math.ceil(data.length/8);
    useEffect(()=>{
        setBlock(true)
        fetchData("Users").then((data)=>{
            setData([...data])
        }).finally(()=>setBlock(false))
      }, [props.category])
    useEffect(()=>{
        console.log("Выбрано с " + startIndex + " по " + endIndex + ". Выбранная страница " + pagination.currentPage)
    }, [pagination])
    const tableHeaderData = ["Customer Name", "Company", "Phone Number", "Email", "City", "Status"]
    return(
        <div className="window-wrapper">
            <div className={`main-window-blocked ${block? 'active' : null}`}>
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
            {currentData.length?
            <Tbody>
                {   currentData.map((elem) =>{
                        return(
                            <Tr key={elem['id']}>
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
            </Tbody>: null}
        </Table>
        <div className="window__result-pagination-wrapper">
                <div className="window__show-results">Showing data <span>1</span> to <span>8</span> of <span>256K</span> entries</div>
                {/* <Pagination pag={pag} setPag={setPag} current={current} setCurrent={setCurrent} pagsize={pagsize} setPagsize={setPagsize} maxCountPages={maxCountPages} setMaxCountPages={setMaxCountPages}/> */}
                <PaginatedItems category={props.category} pagination={pagination} setPagination={setPagination} totalpages={totalpages}/>
        </div>
    </div>
    )
}