import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux"
import App from './App';
import { store } from './Redux/Store';
createRoot(document.getElementById('root')).render( <Provider store={store}><App /></Provider>  )
