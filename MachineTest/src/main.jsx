import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShopProvider } from './Provider/ShopProvider.jsx';

createRoot(document.getElementById('root')).render(<ShopProvider><App /></ShopProvider>)
