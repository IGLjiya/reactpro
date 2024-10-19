import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  </BrowserRouter>
}

export default App;
