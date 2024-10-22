
import {  SimpleGrid  } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import DragItem from './DragItem';


const DragElement = () => {
  
  const task = useSelector((state) => state.task.task )
  console.log('tesasjv', task)
  

  return ( 

  <SimpleGrid   spacing={1} templateColumns='repeat(3, minmax(200px, 1fr))' >
        
         {task?.map((item , index) =>(
        <DragItem item={item} key={index} />
         )
)}
      
    
     </SimpleGrid>

 
  )
}

export default DragElement
