import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pagination from "./Pages/Pagination";
import SingleView from "./Components/SingleView";


const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={Pagination} />
      <Route path="/single-view/:id" Component={SingleView}/>
    </Routes>
  </BrowserRouter>
}

export default App;
