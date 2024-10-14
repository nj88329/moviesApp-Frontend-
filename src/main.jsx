import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css';

// Initialize Firebase
// export default onAuthStateChanged  
// import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
 
  
    
        <BrowserRouter>
            <App  />
        </BrowserRouter>
   
  
)
