import React from 'react';
import { Table} from 'react-bootstrap'


const TableUser = ({user}) => {
    return (
        <div>
            <Table striped="columns" responsive border={1} style={{borderCollapse:"collapse", width:"100%"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {user.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.username}</td>
              <td>{element.address.city}</td>
              <td>{element.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>

        </div>
    );
}

export default TableUser;
