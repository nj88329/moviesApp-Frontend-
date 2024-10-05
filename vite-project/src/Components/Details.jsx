import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from 'prop-types';
import '../index.css';

const Details = ({item }) => {
      
    const [isOpen, setIsOpen] = useState(true);
    
  return (
    <div>
      <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
      style={{ position :'absolute' , zIndex: 10, backgroundColor: 'lightblue',  opacity : 1.2 , borderRadius :'10%' ,
         backgroundImage: `url(${item.poster_path})`,
        backgroundSize: 'cover', // or 'contain'
         }}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
        
          transition={{ duration: 0.2}}
          // style={{ originY: 55 }}
        >
       
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            // clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
              backgroundImage : `${item.poster_path}`
            }
          },
          closed: {
            // clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.h2 >Title : {item.title} </motion.h2>
        <motion.h2 >Original Title{item.original_title} </motion.h2>
        <motion.h2 style={{overflow:'hidden'}}>{`Desc:${item.overview}`} </motion.h2>
        <motion.h2 >{item.contentType} </motion.h2>
        {/* <motion.h2>Release Date : {item.release_date}</motion.h2> */}
      </motion.ul>
    </motion.nav>
    
    </div>
  )
}

Details.propTypes = {
    item:PropTypes.shape({
          title: PropTypes.string.isRequired,
          original_title: PropTypes.string,
          backdrop_path: PropTypes.string,
          poster_path: PropTypes.string.isRequired,
          overview: PropTypes.string.isRequired,
          release_date: PropTypes.string.isRequired,
          genres: PropTypes.arrayOf(PropTypes.string),
          first_aired:PropTypes.string.isRequired,
          contentType: PropTypes.string.isRequired,
          _id: PropTypes.string, // If you have an ID in the object
        }).isRequired,
        setClicked:PropTypes.func,
    };


export default Details




