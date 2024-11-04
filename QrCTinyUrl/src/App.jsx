import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
    <Toaster position="top-right" />
  </BrowserRouter>
}

export default App;
