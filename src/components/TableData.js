import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export const TableData = (props) => {
    return(
        <Table withbasestyles={{breakpoint: '45em'}}  className="window__information-table">
            <Thead>
                <Tr className="window__information-table-header">
                    <Th>Customer Name</Th>
                    <Th>Company</Th>
                    <Th>Phone Number</Th>
                    <Th>Email</Th>
                    <Th>City</Th>
                    <Th>Status</Th>
                </Tr>
            </Thead>
            <Tbody>
                {props.data.map((item) =>{
                    let a = Math.random();
                    let status;
                    a > 0.5 ? status = "Inactive" : status = "Active";
                    return(
                    <Tr key={item['id']}>
                        <Td>{item['firstName']}</Td>
                        <Td>{item['company']['name']}</Td>
                        <Td>{item['phone']}</Td>
                        <Td>{item['email']}</Td>
                        <Td>{item['address']['city']}</Td>
                        <Td><div className={a> 0.5 ? "status" :"status active" }>{status}</div></Td>
                    </Tr>)
                })}
            </Tbody>
        </Table>
    )
}