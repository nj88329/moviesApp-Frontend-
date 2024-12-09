import { Box } from '@chakra-ui/react';
import { useEffect, useRef ,useState } from 'react'; 
import { getWatchList } from './Watchlist';
import { useAuth } from '../App';

const PdfViewer = () => {

  
  const { user , authToken } = useAuth();  
  
  let [completedTask , setCompletedTask] = useState([])

  console.log('completef', completedTask);
 


  // fetching the data from the database for the movies to be watched using utility function getWatchlist 
  useEffect(()=>{

    async function getData(){
      let response = await  getWatchList(authToken);
      setCompletedTask(response)
      console.log('completedTask',completedTask)
    }
    getData();

  },[])
 
  const  divRefs = useRef([]);

  const hover = (index)=>{
    
     if (divRefs.current[index]) {
        divRefs.current[index].style.backgroundColor = 'black';
        divRefs.current[index].style.borderColor = 'yellow';
        divRefs.current[index].style.color = 'red';
        divRefs.current[index].style.transform = 'scale(1.2)';
        divRefs.current[index].style.transition = 'transform 0.3s ease'; // Add transition for smooth scaling
      }
    
  }

  const unHover = (index)=>{
    console.log('unhover', index);
    divRefs.current[index].style.backgroundColor = 'grey';
    divRefs.current[index].style.color = '';
    divRefs.current[index].style.borderColor = '';
    divRefs.current[index].style.transform = 'scale(1)';
 }

  return (


 <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
 { 
   completedTask?.map((item , index)=>{ return<>
    <Box maxW='sm' key={index} borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex' flexWrap = 'nowrap'
    backgroundImage={item.movie.backdrop_path} ref={(el) => divRefs.current[index] = el} 
    margin='5px' onMouseEnter={()=>hover(index)} onMouseLeave={()=>unHover(index)}
    
    >
      {/* <Image src={item.backdrop_path} alt={item.title} /> */}
 
      <Box p='6'>
        <Box  alignItems='baseline' >
          <Box
            
            // color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {/* {property.beds} beds &bull; {property.baths} baths */}
          </Box>
        </Box>

        <Box 
          
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {item.movie.original_title}
        </Box>

        <Box>
          {/* {property.formattedPrice} */}
          <Box as='span'  fontSize='sm'>
            Launched  : {item.movie.first_aired}
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' ml='2' fontSize='sm'>
            {/* {property.reviewCount} reviews */}
          </Box>
        </Box>
      </Box>
    </Box>
    </>})
}
</Box>
  )
}

export default PdfViewer
