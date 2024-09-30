import React, {  } from 'react';
import LandingPages from './Pages/LandingPages';
import {Toaster} from 'react-hot-toast'
import ShopPage from './Pages/ShopPage';
import UserTable from './Pages/UserTable';


const App = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    return (
      <div>
        {/* <LandingPages/> */}
        <Toaster position='top-right'/>
        {/* <ShopPage/> */}
        {/* <UserTable/> */}
      </div>
    );
};



export default App;
