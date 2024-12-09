import './App.css'
import React, { createContext ,  useContext ,useEffect ,useState , useMemo , useRef } from 'react'
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
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ImageGallery } from './Components/ImageGallery';




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


const AuthContext = createContext();
function App() {

  
 console.log('app rend')
  
  // const [index, set] = useState(0)
  const indexRef = useRef(0); // Create a ref for the index
  // const currentImageRef = useRef(slides[0]); // Ref for the current background image

  // const transitions = useTransition(indexRef.current, {
  //   key:indexRef.current,
  //   from: {
  //     clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)' ,
  //     opacity: 0
  //   },
  //   enter: {
  //     clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
  //     opacity: 1
  //   },
  //   leave: {
  //     clipPath: 'polygon(100% ,0%, 100% 100%, 100% 100%, 100% 0%)',
  //     opacity: 0
  //   },
  //   config: { duration: 4000 },
  //   onRest: () => {
  //     // Update the index without causing a state change
  //     indexRef.current = (indexRef.current + 1) % slides.length;
  //     currentImageRef.current = slides[indexRef.current];
  //   },
  //    exitBeforeEnter:false,
  // })

  const [user, setUser] = useState(null);
  const [authToken, setToken] = useState(null);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(newUser) => {
      setUser((prevUser) => (newUser?.uid !== prevUser?.uid ? newUser : prevUser));
      let token = await newUser.getIdToken();
      setToken(token);
    });
          
    return () => unsubscribe();
  }, [user]);

  const memoizedUser = useMemo(() => user, [user]);

  return (
    <>

  <Provider store={store} >
  <AuthContext.Provider value={{user ,authToken }}>
  <ChakraProvider>
     {/* <div style={{ backgroundColor: 'black',  height: '100vh', width: '100vw', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}> */}
    <div style={{ backgroundColor: ''}}>
       
      
          <Navbars />
          <div style={{ flexGrow: 1 }}> 
        <Routes>
      
        <Route path="/login" element={<Login user={memoizedUser} />} />
        <Route path='/animation' element={<Animation />}></Route>
          <Route element={<ProtectedRoute   user = {memoizedUser}  />}> 
             <Route exact path="/" element={<Home/>} />
              <Route path="/features" element={<Features/>} />
              <Route path="/pdf" element={<PdfUploader/>} />
              <Route path='/viewpdf' element = {<PdfViewer/>}></Route>
          </Route>
          <Route path = '/gallery' element = {<ImageGallery/>}></Route>
        </Routes>
        </div>
        {/* </div> */}
        </div>
   </ChakraProvider>
   </AuthContext.Provider>
      </Provider>
      
    </>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
};


export default React.memo(App);