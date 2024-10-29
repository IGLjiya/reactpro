import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Notfound from "./Pages/notfound";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="*" Component={Notfound}/>
    </Routes>
  </BrowserRouter>
}

export default App;
