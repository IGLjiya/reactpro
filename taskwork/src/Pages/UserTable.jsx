import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const UserTable = () => {

    const [data,setData]=useState(null)
    const [loading, setLoading]=useState(true)

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response)=>response.json())

    // })

    return (
        <div>
            <Table responsive >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default UserTable;
