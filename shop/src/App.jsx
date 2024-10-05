import React, { createContext, useState } from 'react';
import ShopPage from './pages/ShopPage';
import { Toaster } from 'react-hot-toast';


export const cartContext = createContext()

const App = () => {

  const [cartList, setCartList] = useState([])
    return (
      <cartContext.Provider value={{cartList, setCartList}} >
        <ShopPage/>
        <Toaster position='top-right'/>
      </cartContext.Provider>
    );
}

export default App;
