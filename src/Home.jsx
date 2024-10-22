 import React,{useMemo} from 'react'
import { motion } from "framer-motion"
import './index.css';
import { useGetAllMoviesQuery , useGetAllShowsQuery } from './rtkQuery/Movies'
import { useState , useEffect} from 'react';
import  Movies  from './Components/Movies';
import  Shows  from './Components/Shows';
import { Tabs, TabList, TabPanels, Tab, TabPanel  } from "@chakra-ui/react";


const Home = () => {

  const { data : moviesList,  isFetching } = useGetAllMoviesQuery();
  const { data : showsList } = useGetAllShowsQuery();
  
  const [selectedTab, setSelectedTab] = useState(null);
  // const [ movies , setMovies ] = useState(moviesList);
  // const [ shows , setShows ] = useState(showsList);

  const movies = useMemo(() => moviesList?.movies || [], [moviesList]);
  const shows = useMemo(() => showsList?.movies || [], [showsList]);
  // useEffect(()=>{
  //   setMovies(moviesList);
  //   setShows(showsList);
  // },[movies , shows , isFetching ])

  console.log( 'helo', shows )



  return (
<>
  <nav>
      <Tabs onChange={(index) => setSelectedTab(index === 0 ? "Movies" : "Shows")}  >
       <TabList>
        <Tab>Movies</Tab>
        <Tab>Shows</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {isFetching ? 'Loading...' : <Movies movies={movies} />}
        </TabPanel>
        
        <TabPanel>
          {isFetching ? 'Loading...' : <Shows shows={shows?.movies} />}
        </TabPanel>
      </TabPanels>
       </Tabs>
    
  </nav>
   <main>

     <motion.div
        key={selectedTab }
       transition={{ duration: 0.4 }}
     >
       {selectedTab ? <span>{selectedTab}</span> : ""}
     </motion.div>
   
 </main>
 </>
  )
}

export default Home
