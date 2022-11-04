import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export const TableData = (props) => {
    useEffect(()=>{
    }, [props.category, props.data])
    const tableHeaderData = {
        carts: ["Title", "Price", "Quantity", "Total"],
        products: ["Title", "Brand", "Price", "Category", "Stock"],
        users: ["Customer Name", "Company", "Phone Number", "Email", "City", "Status"]
    }
    function getTable(data, category, index){
        switch(category){
            case 'carts':
                return(
                    <Tr key={index}>
                        <Td>{data?.['products']?.[1]['title']}</Td>
                        <Td>{data?.['products']?.[1]['price']}</Td>
                        <Td>{data?.['products']?.[1]['quantity']}</Td>
                        <Td>{data?.['products']?.[1]['total']}</Td>
                    </Tr>
                )
            case 'products':
                return(
                    <Tr key={index}>
                        <Td>{data['title']}</Td>
                        <Td>{data['brand']}</Td>
                        <Td>{data['price']}</Td>
                        <Td>{data['category']}</Td>
                        <Td>{data['stock']}</Td>
                    </Tr>
                )
            case 'users':
                return (
                    <Tr key={index}>
                        <Td>{data['firstName']}</Td>
                        <Td>{data?.['company']?.['name']}</Td>
                        <Td>{data['phone']}</Td>
                        <Td>{data['email']}</Td>
                        <Td>{data?.['address']?.['city']}</Td>
                        <Td><div className={data['gender'] == "male" ? "status" :"status active" }>{data['gender'] == "male" ? "Inactive" :"Active"}</div></Td>
                    </Tr>
                );
            default:
                console.log("DEFAULT")
                return;
        }
    }
    //company: { name:'name'}
    return(
        <Table withbasestyles={{breakpoint: '45em'}}  className="window__information-table">
            <Thead>
                <Tr className="window__information-table-header">
                    {tableHeaderData[props.category].map((item, i)=>{
                        return (<Th key={i}>{item}</Th>)
                    })}
                </Tr>
            </Thead>
            <Tbody>
                {   props.data.map((elem, i) =>{
                        return(
                            getTable(elem, props.category, i)
                        )
                })
                }
                {/* {props.data.map((item, i) =>{
                    console.log("Данные с апи ", item)
                    // console.log(props.category)
                    return(
                        <Tr key={i}>
                            {tableData[props.category.toLowerCase()].map((elem, j) => {
                                console.log("Данные построчно ", elem)
                                return(
                                    <React.Fragment key={j}>
                                        <Td>{item[elem.toLowerCase()]}</Td>
                                    </React.Fragment>
                                )
                            })}
                        </Tr>
                    )
                })} */}
            </Tbody>
        </Table>
    )
}









                {/* {props.data.map((item) =>{
                    return(
                        <Tr key={item['id']}>
                        <Td>{item['firstName']}</Td>
                        <Td>{item['company']['name']}</Td>
                        <Td>{item['phone']}</Td>
                        <Td>{item['email']}</Td>
                        <Td>{item['address']['city']}</Td>
                        <Td><div className={item['gender'] == "male" ? "status" :"status active" }>{item['gender'] == "male" ? "Inactive" :"Active"}</div></Td>
                    </Tr> 
                    )
                })} */}