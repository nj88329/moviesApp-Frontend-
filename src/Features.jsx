import {  useState , useEffect } from 'react';
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DragElement from "./DragElement";
import DroppedElement from "./DroppedElement";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useGetVideoQuery } from './rtkQuery/Video'

const Features = () => {

  const { data : videoList,  isFetching } = useGetVideoQuery();

  const [ video , setSports ] = useState(videoList);

   
  
  useEffect(()=>{
    setSports(videoList);
     if( video ) console.log('video', video)
  },[video , isFetching ])
 
  return (
      <>
  
      <Nav> 
        <Nav.Link as={Link} to="/viewpdf" style={{marginLeft :'50%'
        }}>Watched</Nav.Link>
      </Nav>
   
    
    <div className='App'  style={{ display: 'inline-flex', justifyContent: 'space-between', width: '100vw' }}>
      <DndProvider backend={HTML5Backend} >
      <div style={{ width:'50%' , boxSizing: 'border-box' , }}> {/* Container for DragElement */}
      <DragElement   />
    </div>
    <div style={{ marginLeft : '20%', width:'40%', boxSizing: 'border-box' }}> {/* Container for DroppedElement */}
      <DroppedElement />
    </div>
       </DndProvider>
    </div>
   
    </>
  )
}

export default Features
