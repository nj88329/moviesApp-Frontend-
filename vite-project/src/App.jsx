import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import Navbars from './Navbars';
import ProtectedRoute from './ProtectedRoute';
import Features from './Features';
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './store/store'
import { Provider } from 'react-redux'
import PdfUploader from './Components/PdfUploader';
import PdfViewer from './Components/PdfViewer';
import Animation from './Components/Animation';
import { initializeApp } from "firebase/app";
import { useEffect ,useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6R3wXPdw9sXkoej4Ndj7lbZqD1PurVSs",
  authDomain: "moviesapp-d0167.firebaseapp.com",
  projectId: "moviesapp-d0167",
  storageBucket: "moviesapp-d0167.appspot.com",
  messagingSenderId: "143961069808",
  appId: "1:143961069808:web:9599560afa0a99ff5d0a35",
  measurementId: "G-E37B4899HL"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
   
      } else {
        setUser(null); // If the user logs out or is not authenticated
      }
    });
    // Cleanup the subscription on unmount
    return () => unsubscribe();
}, []);

  return (
    <>
{/* cc5200 */}

  <Provider store={store} >
  <ChakraProvider>
        <div style={{ backgroundColor: 'brown',  height: '100vh', width: '100vw', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <Navbars />
          <div style={{ flexGrow: 1 }}> 
        <Routes >
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path='/animation' element={<Animation />}></Route>
          <Route element={<ProtectedRoute   user={user}  />}> 
              <Route path="/features" element={<Features/>} />
              <Route path="/pdf" element={<PdfUploader/>} />
              <Route path='/viewpdf' element = {<PdfViewer/>}></Route>
          </Route>
          
        </Routes>
        </div>
        </div>
   </ChakraProvider>
  
      </Provider>
      
    </>
  )
}



export default App
