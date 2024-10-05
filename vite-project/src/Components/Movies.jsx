import { Card,  CardBody, CardFooter ,Button , ButtonGroup , Stack , Text  , Image} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import '../index.css'
import { motion } from "framer-motion";
import { useState } from 'react';

const Movies = ({movies}) => {

    const itemsPerPage = 9;
    const [ currentPage , setCurrentPage ] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Handle previous and next page buttons
    const handleNextPage = () => {
      if (endIndex < movies.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };  
   
  
  return (
   <div style={{display:'block'}}>
    <div className='grid-container' style={{overflowY: "scroll" , overflowX :'hidden' }} >
       {
        movies?.slice(startIndex , endIndex).map((item, index)=>{ return<>
         <Card maxW='sm' key={index}  style={{backgroundColor:'purple'}}   
          as={motion.div}  
          initial={{ opacity: 1 }}
                //  dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.1 , opacity : 0.8 }}
                whileTap={{ scale: 1.2}}
                transition = '0.5s linear'
                whileInView={{ opacity: 1 }}
                >
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
                    </Stack>
                </CardBody>
            
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    </ButtonGroup>
                </CardFooter>
         </Card>
         </>
        })
        }
    </div>
    <div style={{   height : '20vh'}}>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button>{currentPage}</Button>
        <Button onClick={handleNextPage} disabled={endIndex >= movies?.length}>
          Next
        </Button>
    </div>
  </div>
  )
}


Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          original_title: PropTypes.string,
          backdrop_path: PropTypes.string,
          poster_path: PropTypes.string.isRequired,
          overview: PropTypes.string.isRequired,
          release_date: PropTypes.string.isRequired,
          genres: PropTypes.arrayOf(PropTypes.string).isRequired,
          contentType: PropTypes.string.isRequired,
          _id: PropTypes.string, // If you have an ID in the object
        })
      ).isRequired,
    };
export default  Movies 
