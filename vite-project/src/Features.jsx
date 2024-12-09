import {  useState , useEffect} from 'react';
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DragElement from "./DragElement";
import DroppedElement from "./DroppedElement";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useGetVideoQuery } from './rtkQuery/Video';
import ReactPlayer from 'react-player/lazy';
import   Carousel   from './Components/Carousel';

const Features = () => {

  const { data : videoList,  isFetching } = useGetVideoQuery();

  const [ video , setSports ] = useState(videoList);

  
  useEffect(()=>{

    setSports(videoList);
    console.log('videoList',videoList)
     if( video ) console.log('video', video.data.topTrendingTitles.edges[0].node.item.latestTrailer.playbackURLs[1].url)
  },[video , isFetching ])

  // Optional: Access carouselRef.current here for any DOM manipulations
  
  return (
      <>
    {/* <div style={{display:'inline'}}>
            <div style={{ display: 'flex', flexWrap: 'nowrap' , height:'30vh', width:'40vw' , margin:'10px'}}>
                  { 
                          video?
                          <Carousel  items={video.data.topTrendingTitles.edges} /> :null
                  } 
            </div>
            <div style={{  boxSizing: 'border-box', margin:'2%' }}> 
              <ReactPlayer  url = {video?.data.topTrendingTitles.edges[0].node.item.latestTrailer.playbackURLs[1].url}
                  controls
                  // playing
              />
            </div>
      </div> */}
  <div style={{ display: 'inline', flexDirection: 'column', alignItems:'start', width: '80vw'  , height:'80vh'  }}>
    {/* Carousel Section */}
    <div style={{ display: 'flex', flexWrap: 'nowrap',height:'20vh', width:'20vw' , marginBottom:'15vh' }}>
        {video ? <Carousel items={video.data.topTrendingTitles.edges} /> : null}
    </div>
    
    {/* Clearfix for Video Player Section */}
    <div style={{ clear: 'both', width: '40vw', boxSizing: 'border-box' ,height:'15vh', marginTop : '20vh'  }}>
        {/* <ReactPlayer 
            url={video?.data.topTrendingTitles.edges[0].node.item.latestTrailer.playbackURLs[1].url}
            controls
        /> */}
    </div>
</div>


    </>
  )
}

export default Features
