import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormProvider } from './Provider/AllProvider.jsx';

createRoot(document.getElementById('root')).render(<FormProvider><App /></FormProvider>)
