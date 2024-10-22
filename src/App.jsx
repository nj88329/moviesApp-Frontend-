import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import Navbars from './Navbars';
import ProtectedRoute from './ProtectedRoute';
import Features from './Features';
import { ChakraProvider, theme } from '@chakra-ui/react'
import { store } from './store/store'
import { Provider } from 'react-redux'
import PdfUploader from './Components/PdfUploader';
import PdfViewer from './Components/PdfViewer';
import Animation from './Components/Animation';
import { initializeApp } from "firebase/app";
import { useEffect ,useState , useMemo } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useTransition, animated } from '@react-spring/web';
import styles from './index.module.css'; // Correct for CSS Modules


const firebaseConfig = {
  apiKey: "AIzaSyD6R3wXPdw9sXkoej4Ndj7lbZqD1PurVSs",
  authDomain: "moviesapp-d0167.firebaseapp.com",
  projectId: "moviesapp-d0167",
  storageBucket: "moviesapp-d0167.appspot.com",
  messagingSenderId: "143961069808",
  appId: "1:143961069808:web:9599560afa0a99ff5d0a35",
  measurementId: "G-E37B4899HL"
};
const slides = [
  'cleanSky.jpg',
  'ai.webp',
   'bat.webp',
    'candle.jpg',
   'codes.jpg',
    'drops.jpg',
    'spaghetti.jpeg',
    'x.webp',
   'clouds.jpg',
   'flowers.jpg',
   'sunset.jpg',
   'water.jpg',
   'clouds.jpg',
   'ai.jpg'
]

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    // from: { opacity: 0 },
    // enter: { opacity: 1 },
    // leave: { opacity: 0 },
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)' ,
      opacity: 0
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      opacity: 1
    },
    leave: {
      clipPath: 'polygon(100% ,0%, 100% 100%, 100% 100%, 100% 0%)',
      opacity: 0
    },
    config: { duration: 4000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set(state => (state + 1) % slides.length)
      }
    },
     exitBeforeEnter:false,
  })

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser((prevUser) => {
        // Only update the user if the new one is different
        if (newUser?.uid !== prevUser?.uid) {
          return newUser || null;
        }
        return prevUser;
      });
    });
  
    return () => unsubscribe();  // Cleanup on unmount
  }, []);

  const memoizedUser = useMemo(() => user, [user]);

  return (
    <>
{/* cc5200 */}

  <Provider store={store} >

  <ChakraProvider>
     {/* <div style={{ backgroundColor: 'black',  height: '100vh', width: '100vw', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}> */}
    <div style={{ backgroundColor: ''}}>
       
        {/* <div className="flex fill center" >
          {transitions((style, i) => (
            <animated.div
              className= { styles.bg }
              style={{
                ...style,
                
                backgroundImage: `url(${slides[i]})`,
                overflowX: 'hidden', display: 'flex', flexDirection: 'column'
              }}
            />
            
          ))}
    </div> */}
          <Navbars />
          <div style={{ flexGrow: 1 }}> 
        <Routes >
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path='/animation' element={<Animation />}></Route>
          <Route element={<ProtectedRoute   user = {memoizedUser}  />}> 
              <Route path="/features" element={<Features/>} />
              <Route path="/pdf" element={<PdfUploader/>} />
              <Route path='/viewpdf' element = {<PdfViewer/>}></Route>
          </Route>
          
        </Routes>
        </div>
        {/* </div> */}
        </div>
   </ChakraProvider>
  
      </Provider>
      
    </>
  )
}



export default React.memo(App);