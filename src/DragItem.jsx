import { useDrag } from "react-dnd";
import {  Heading , Text  } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter  } from '@chakra-ui/card';
import { Image } from "@chakra-ui/react";
import PropTypes from 'prop-types'; // Import PropTypes
import { useSelector, useDispatch } from 'react-redux';
import {  doneTask  } from './features/taskSlice'
import { motion, useTime, useTransform } from "framer-motion";

const MotionCard = motion(Card);

const DragItem = ({item}) => {
  
  
const time = useTime();
const rotate = useTransform(time, [0, 4000], [0, 180], { clamp: false });


  const task = useSelector((state) => state.task.task)
  const dispatch = useDispatch();
   
  console.log('state',task)

  console.log('dragItem', item)

    const [{ isDragging }, dragRef] = useDrag({
        type: "Card",
        item: { _id: item._id, name : item.title },
        end: async( item , monitor) =>{
          const droppedResult = monitor.getDropResult()
          if( item && droppedResult){
            // alert(`You threw ${item.name} into ${droppedResult.name}`)
            console.log('droppedfromcomoponr', item)
             let response = await fetch( `http://localhost:3000/add/deleteTask/${item._id}`,
              {method: 'PUT',
                headers : {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify() 
              })
                  dispatch(doneTask(item._id))
              if (response.ok) {
                // const updatedItem = await response.json();
                console.log('Item status updated successfully');
              } else {
                const errorData = await response.json();
                console.log('Failed to update item status', errorData);
              }
          }
        },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      
      });  

// useEffect(()=>{
  
// },[dispatch])


  return (
   <>{ item.taskStatus === 'To Do' ?
   <>
  
   <MotionCard 
        ref={dragRef}
      style={{
        rotate,
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: 'lightblue',
        cursor: 'move', 
      }}>
                <CardHeader>
                <Heading size='md'>{item.title}</Heading>
                </CardHeader>
                <CardBody >
                {/* <Image   src={item.
                        backdrop_path} />  */}
                              <Image src={item.backdrop_path} />
                </CardBody>
                <CardFooter>
                </CardFooter>
            </MotionCard> </>
 :<>

 <Card 
   as={motion.div}  
    ref={dragRef}
    style={{
    opacity: isDragging ? 0.5 : 1, 
    backgroundColor: 'lightblue',
    cursor: 'move',
    }}>
     
         <CardHeader>
         <Heading size='md'>{item.title}</Heading>
         </CardHeader>
         <CardBody>
         <Image   src={item.
                        backdrop_path}/>
                  
         </CardBody>
         <CardFooter>
         </CardFooter>
     </Card>  
     </>
    }
    </>
   
  )
}


DragItem.propTypes = {
  item:   PropTypes.shape({
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string,
      backdrop_path: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      contentType: PropTypes.string.isRequired,
      _id: PropTypes.string, 
      taskStatus: PropTypes.string// If you have an ID in the object
    }).isRequired, // Validate that `item` is an object with required properties
};
  

export default DragItem
