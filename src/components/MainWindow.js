import React from "react";
import { ReactComponent as Search } from "../search.svg";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Burger } from "./Burger";
import { Pagination } from "./Pagination";

export const MainWindow = (props) => {
    return(
        <div className="main-wrapper">
            <div className="header">
                <Burger sideMenu={props.sideMenu} setSideMenu={props.setSideMenu}/>
                <div className="hello-user">Hello <span>Evano</span> 👋🏼,</div>
            </div>
            <div className="window-wrapper">
                <div className="window-header__wrapper">
                    <div className="window-header__wrapper-title">
                        <div className='window-header__title'>All {props.category}</div>
                        <div className="window-header__subtitle">Active members</div>
                    </div>
                    <div className="window-header__search">
                        <Search className="search-icon" width='24' height='24'/>
                        <input placeholder="Search"></input>
                    </div>
                </div>
                <Table withbasestyles={{breakpoint: '45em'}}  className="window__information-table">
                    <Thead>
                        <Tr className="window__information-table-header">
                            <Th>Customer Name</Th>
                            <Th>Company</Th>
                            <Th>Phone Number</Th>
                            <Th>Email</Th>
                            <Th>Country</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Jane Cooper</Td>
                            <Td>Microsoft</Td>
                            <Td>(225) 555-0118</Td>
                            <Td>jane@microsoft.com</Td>
                            <Td>United States</Td>
                            <Td><div className="status active">Active</div></Td>
                        </Tr>
                        <Tr>
                            <Td>Jane Cooper</Td>
                            <Td>Microsoft</Td>
                            <Td>(225) 555-0118</Td>
                            <Td>jane@microsoft.com</Td>
                            <Td>United States</Td>
                            <Td><div className="status">Inactive</div></Td>
                        </Tr>
                        <Tr>
                            <Td>Jane Cooper</Td>
                            <Td>Microsoft</Td>
                            <Td>(225) 555-0118</Td>
                            <Td>jane@microsoft.com</Td>
                            <Td>United States</Td>
                            <Td><div className="status active">Active</div></Td>
                        </Tr>
                        <Tr>
                            <Td>Jane Cooper</Td>
                            <Td>Microsoft</Td>
                            <Td>(225) 555-0118</Td>
                            <Td>jane@microsoft.com</Td>
                            <Td>United States</Td>
                            <Td><div className="status">Inactive</div></Td>
                        </Tr>
                        <Tr>
                            <Td>Jane Cooper</Td>
                            <Td>Microsoft</Td>
                            <Td>(225) 555-0118</Td>
                            <Td>jane@microsoft.com</Td>
                            <Td>United States</Td>
                            <Td><div className="status active">Active</div></Td>
                        </Tr>
                        <Tr>
                            <Td>Jane Cooper</Td>
                            <Td>Microsoft</Td>
                            <Td>(225) 555-0118</Td>
                            <Td>jane@microsoft.com</Td>
                            <Td>United States</Td>
                            <Td><div className="status">Inactive</div></Td>
                        </Tr>
                    </Tbody>
                </Table>
                {/* <table className="window__information-table">
                    <tbody>
                        <tr className="window__information-table-header">
                            <th>Customer Name</th>
                            <th>Company</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Jane Cooper</td>
                            <td>Microsoft</td>
                            <td>(225) 555-0118</td>
                            <td>jane@microsoft.com</td>
                            <td>United States</td>
                            <td><div className="status active">Active</div></td>
                        </tr>
                        <tr>
                            <td>Jane Cooper</td>
                            <td>Microsoft</td>
                            <td>(225) 555-0118</td>
                            <td>jane@microsoft.com</td>
                            <td>United States</td>
                            <td><div className="status">Inactive</div></td>
                        </tr>
                        <tr>
                            <td>Jane Cooper</td>
                            <td>Microsoft</td>
                            <td>(225) 555-0118</td>
                            <td>jane@microsoft.com</td>
                            <td>United States</td>
                            <td><div className="status">Inactive</div></td>
                        </tr>
                        <tr>
                            <td>Jane Cooper</td>
                            <td>Microsoft</td>
                            <td>(225) 555-0118</td>
                            <td>jane@microsoft.com</td>
                            <td>United States</td>
                            <td><div className="status">Inactive</div></td>
                        </tr>
                        <tr>
                            <td>Jane Cooper</td>
                            <td>Microsoft</td>
                            <td>(225) 555-0118</td>
                            <td>jane@microsoft.com</td>
                            <td>United States</td>
                            <td><div className="status active">Active</div></td>
                        </tr>
                    </tbody>
                </table> */}
                <div className="window__result-pagination-wrapper">
                    <div className="window__show-results">Showing data <span>1</span> to <span>8</span> of <span>256K</span> entries</div>
                    <Pagination/>
                </div>
            </div>
        </div>
    )
}