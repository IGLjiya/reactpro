import React, {  } from 'react';
import LandingPages from './Pages/LandingPages';
import {Toaster} from 'react-hot-toast'
import ShopPage from './Pages/ShopPage';


const App = () => {
    return (
      <div>
        {/* <LandingPages/> */}
        <Toaster position='top-right'/>
        <ShopPage/>
      </div>
    );
};



export default App;
