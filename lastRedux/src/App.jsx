import { BrowserRouter, Route, Routes } from "react-router-dom"
import Redux from "./Pages/Redux";
import TodoRedux from "./Pages/TodoRedux";
import { Toaster } from 'react-hot-toast'


const App = () => {
  return <BrowserRouter>
            <Routes>
              {/* <Route path="/" Component={Redux} /> */}
              <Route path="/" Component={TodoRedux}/>
            
            </Routes>
            <Toaster position="top-right"/>
          </BrowserRouter>
}

export default App;
