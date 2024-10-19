import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UrlProvider } from './AllProvidre/provider.jsx';

createRoot(document.getElementById('root')).render(<UrlProvider><App/></UrlProvider>)
