import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Fragment } from 'react';
import MouseFollower from './Compenent/mouseFollower';
// import TableUser from './Compenent/TableUser';

const App = () => {

  // const [user, setUser] = useState([])


  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data))
  //     .catch((err) => console.log(err))

  // }, []);

  // console.log(user);


  return (


    <Fragment>
 {/* <TableUser user={user} /> */}
      <MouseFollower/>
    </Fragment>

  );
}

export default App;
