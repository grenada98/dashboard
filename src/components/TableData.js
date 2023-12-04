import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export const TableData = (props) => {
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
            </Tbody>
        </Table>
    )
}