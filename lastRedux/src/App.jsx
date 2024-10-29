import { BrowserRouter, Route, Routes } from "react-router-dom"
import Redux from "./Pages/Redux";


const App = () => {
  return <BrowserRouter>
            <Routes>
              <Route path="/" Component={Redux} />
            </Routes>
          </BrowserRouter>
}

export default App;
