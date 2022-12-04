import React from 'react';
import { Table } from 'react-bootstrap';
import '../src/DataTable.css';
import Button from './Button';
import img from './assets/image.png';
const DataTable = ({ tableData, tableConfig, index, citySort }) => {
    return (

        <div>

            {
                tableConfig[index].id === 1
                &&
                <Table striped bordered hover className='width m-5'>
                    <thead>
                        <tr>
                            {tableConfig[index].headings.map((heading, i) => <th key={i} className={heading.title === "Email Address" ? 'size-email' : 'size'}> {heading.title} {heading.sort.status && <Button citySort={citySort}></Button>}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data, i) => <tr key={i}>
                                <td className='normal-text'><img src={img} alt="" className='avatar' />{data.person.name}</td>
                                <td className='normal-text'>{data.city}</td>
                                <td ><p className='email-text'>{data.email}</p></td>
                                <td className='normal-text'>{data.joiningDate}</td>
                                <td className='normal-text'>{data.role}</td>

                            </tr>)
                        }
                    </tbody>
                </Table>
            }
            {
                tableConfig[index].id === 2
                &&
                <Table striped bordered hover className='width m-5'>
                    <thead>
                        <tr>
                            {tableConfig[index].headings.map(heading => <th className='size'> {heading.title} {heading.sort.status && <Button></Button>}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data, i) => <tr key={i}>
                                <td className='normal-text'><img src={img} alt="" className='avatar' />{data.person.name}</td>
                                <td ><p className='email-text'>{data.email}</p></td>
                                <td className='normal-text'>{data.role}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            }
            {
                tableConfig[index].id === 3
                &&
                <Table striped bordered hover className='width m-5'>
                    <thead>
                        <tr>
                            {tableConfig[index].headings.map((heading, i) => <th key={i} className='size'> {heading.title} {heading.sort.status && <Button></Button>}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data, i) => <tr key={i}>
                                <td className='normal-text'>{data.joiningDate}</td>
                                <td ><p className='email-text'>{data.email}</p></td>
                                <td className='normal-text'>{data.role}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            }
            {
                tableConfig[index].id === 4
                &&
                <Table striped bordered hover className='width m-5'>
                    <thead>
                        <tr>
                            {tableConfig[index].headings.map((heading, i) => <th key={i} className='size'> {heading.title} {heading.sort.status && <Button></Button>}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data, i) => <tr key={i}>
                                <td className='normal-text'><img src={img} alt="" className='avatar' />{data.person.name}</td>
                                <td className='normal-text'>{data.city}</td>
                                <td className='normal-text'>{data.joiningDate}</td>
                                <td className='normal-text'>{data.role}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            }


        </div>
    );
};

export default DataTable;