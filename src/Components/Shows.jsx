import { Card, CardBody, CardFooter ,Button , ButtonGroup , Stack , Text  , Image} from '@chakra-ui/react';
import { motion } from "framer-motion";
import Details from './Details';
import {useState , useRef} from 'react'
import PropTypes from 'prop-types';
import { addToWatchList } from './Watchlist';
import { useDispatch  } from 'react-redux'; 
import { toDoTask } from '../features/taskSlice';
import { useAuth } from '../App';


const Shows = ({shows}) => {

  const { user , authToken } = useAuth();  
  

 const buttonRef = useRef([]);

  
  const changeColor = (index)=>{
    if (buttonRef.current[index]) {
      buttonRef.current[index].style.backgroundColor = 'black';
      buttonRef.current[index].style.color = 'yellow';
      buttonRef.current[index].disabled = true;
      buttonRef.current[index].innerText = 'Added'
    }
  }

   const [ clicked , setClicked ] = useState('');
     const divRefs = useRef([]);
     const dispatch = useDispatch();

     const resetAllCards = () => {
      divRefs.current.forEach((div) => {
        if (div) {
          div.style.backgroundColor = 'purple';
          div.style.opacity = 1;
          div.style.zIndex = '';
        }
      });
    };
  
    
     const shareDetails = (e, index) => {
    
      resetAllCards();
      if (e === clicked) {
        setClicked('');
        return;
      }
      
      setClicked(e);
  
      // Safely check if the specific divRef exists
      if (divRefs.current[index]) {
        divRefs.current[index].style.backgroundColor = "lightblue";
        divRefs.current[index].style.opacity = 0.6;
        divRefs.current[index].style.zIndex = 2;
        divRefs.current[index].style.position = 'relative';
      }
    }

 
  return (
    <div className='grid-container' style={{overflowY: "scroll" , overflowX :'hidden' }}>
       {
        shows?.map((item, index)=>{ return<>
         <Card maxW='sm' key={index}    style={{  backgroundColor:'purple' , position: 'relative'}} 
         ref={(el) => divRefs.current[index] = el} 
          as={motion.div}  
          initial={{ opacity: 1 }}
          
                //  dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.1 , opacity : 0.8 }}
                whileTap={{ scale: 1.2}}
                transition='0.4s'
                whileInView={{ opacity: 1 }}  >
                <CardBody>
                    <Image
                    src={item.
                        backdrop_path}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    
                    <Text color='blue.600' fontSize='2xl'>
                       {item.title}
                    </Text>
                     <Button onClick={()=>{shareDetails(item.title , index) }} > 
                       { ( clicked === item.title ) ? <Details item={item} /> : 'Poster' }
                     </Button>
                     <Button onClick={()=>{addToWatchList(item , user , authToken); dispatch(toDoTask(item)); changeColor(index) }} ref={(el) => buttonRef.current[index] = el} > 
                         Add To watchList                       
                     </Button>
                    </Stack>
                </CardBody>
            
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    </ButtonGroup>
                </CardFooter>
         </Card></>
        })
        }
    </div>
  )
}

Shows.propTypes = {
  shows: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        original_title: PropTypes.string,
        backdrop_path: PropTypes.string,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
        contentType: PropTypes.string.isRequired,
        _id: PropTypes.string, // If you have an ID in the object
      })
    ).isRequired,
  };


export default Shows
