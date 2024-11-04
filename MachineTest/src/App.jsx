import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Componrnts/ProductPage";
import CartPage from "./Pages/CartPage";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="" Component={LandingPage} />
        <Route path="product" >
          <Route path=":id" Component={ProductPage} /> 
        </Route>
      </Route>
      <Route path="cart" Component={CartPage}/>
    </Routes>
    <Toaster position="top-right" />
  </BrowserRouter>
}

export default App;
