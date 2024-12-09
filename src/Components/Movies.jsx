import {React,  memo,useState } from 'react';
import {
  Card, CardBody, CardFooter,
  Button, ButtonGroup, Stack, Text, Image,
  Box
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const Movies = ({ movies }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Handle previous and next page buttons
  const handleNextPage = () => {
    if (currentPage * itemsPerPage < movies.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  console.log('movies comp',movies )

  return (
    <Box>
      <Box className='grid-container' style={{ overflowY: "scroll", overflowX: 'hidden' }}>
        {movies?.slice(startIndex, endIndex).map((item) => (
          <Card maxW='sm' key={item._id} style={{ backgroundColor: 'purple' }}
            as={motion.div}
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 1.2 }}
            transition='0.5s linear'
            whileInView={{ opacity: 1 }}
          >
            <CardBody>
              <Image src={item.backdrop_path} borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                <Text color='blue.600' fontSize='2xl'>
                  {item.title}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  {item.genres[0]}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing='2'>
                {/* Add any buttons you want here */}
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Box>
      <Box style={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button>{currentPage}</Button>
        <Button onClick={handleNextPage} disabled={endIndex >= movies.length}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

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
      _id: PropTypes.string.isRequired, // Ensure this is required if it's used as key
    })
  ).isRequired,
};

export default memo(Movies);
