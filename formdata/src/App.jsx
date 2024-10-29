import { BrowserRouter, Route, Routes,  } from "react-router-dom"
import Form from './Pages/form';
import Formik from './Pages/formik';

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' Component={Form} />
      <Route path="/formik" Component={Formik}/>
    </Routes>

  </BrowserRouter>
}

export default App;
