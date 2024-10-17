import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PageProvider } from './Provider/AllProvider.jsx';
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(<PageProvider>

    <App />
    <Toaster position='top-right'/>
</PageProvider>)
