import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import {  Heading , Text  } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter  } from '@chakra-ui/card';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import './App.css'


const MotionCard = motion(Card);

const DroppedElement = () => {

  const completedtask = useSelector((state) => state.task.completedTask)
  //  state.completedtask)
  console.log('compeleddec', completedtask)
  

    const [{ isOver, canDrop }, dropRef] = useDrop({
        accept: 'Card', // Ensure this matches the type in useDrag
        drop: (draggedItem) => {
            // Call the onDrop function and pass the dragged item's name
            console.log('Dropped item:', draggedItem);
            return { name: 'the bin' }; // Optional: Return the drop result
          },// Correctly returning an object
        collect: (monitor) => ({
          isOver: !!monitor.isOver(), // Collects whether the item is being hovered over
          canDrop: !!monitor.canDrop(), // Collects whether the item can be dropped
        }),
      },[]);
      
useEffect(()=>{

},[completedtask])

  return (
    <>
    <Container ref = {dropRef} 
     style={{
          display : 'grid',
         gap: '3px',
          alignItems: 'center', // Center the content
          justifyContent: 'center',
         textAlign: 'center',  // Center the text horizontally 
      }}
      >
       
    <MotionCard style={{backgroundColor:'grey'  }}>   
                <CardHeader>
                <Heading size='md'> Move already Watched Movies here.</Heading>
                </CardHeader>
                <CardBody>
                <Text></Text>
                </CardBody>
                <CardFooter>
                </CardFooter>
            </MotionCard>
    </Container>
    </>
  )
}

const Container = styled.div`
  padding: 3px;
  display: grid;
  margin:10px
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default DroppedElement



{/* <div className="relative w-full overflow-hidden"> */}
{/* Wrapping div for seamless looping */}
{/* <motion.div
    className="flex"
    animate={{
        x: ['-100%', '0%'],
        transition: {
            ease: 'linear',
            duration: 5,
            repeat: Infinity,
        }
    }}
> */}
    {/* Render duplicated slides */}
    {/* {duplicatedSlides.map((slide, index) => (
        <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
                {slide.number}
            </div>
        </div>
    ))}
</motion.div>
</div> */}