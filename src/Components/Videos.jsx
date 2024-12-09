import { useGetVideoQuery } from '../rtkQuery/Video';
import ReactPlayer from 'react-player/lazy';
import {  useState , useEffect} from 'react';



const Videos = () => {

    const { data : videoList,  isFetching } = useGetVideoQuery();

    const [ video , setSports ] = useState(videoList);
    const [ mappingVideos , setMappingVideos ] = useState([]);
    
    useEffect(()=>{
  
      setSports(videoList);
      console.log('videoList',videoList)
       if( video ) 
       {
        console.log('video', video.data.topTrendingTitles.edges)
        const newMappingVideos = video.data.topTrendingTitles.edges.map(item => ({
            ...item,
            play: false, // Add new property
          }));
      
          setMappingVideos(newMappingVideos);
          console.log('updated', newMappingVideos);
       }
    },[video , isFetching ])


     const changeStatus = (index)=>{

      const newMappingVideos =  mappingVideos.map((item ,id)=>{
         if( id === index ) 
            {
              item.play = !item.play;
            }
         else 
          {
           if( item.play === true )
                  item.play = false;
          }
        return item;
       })
       setMappingVideos(newMappingVideos);
     }
   

  return (
    <div className='grid-container' style={{overflowY: "scroll"  , margin : '2rem' , marginRight : '-2rem'}} >
       {mappingVideos?.map((item , index)=>
      <>
      
         <div className="card" key={item} style={{width: '28rem' , backgroundColor:'purple' }}>
          <ReactPlayer url={item.node.item.latestTrailer.playbackURLs[0].url}   
                    width="100%"
                    height="110%"
                    playing = {item.play}
           />
            <div className="card-body">
                <h5 className="card-title">{item.node.item.latestTrailer.name.value}</h5>
               {
                 item.play?<button onClick={(e)=>changeStatus(index)} style={{backgroundColor:'yellow' , justifyContent:'center'}}>Pause</button> : 
                  <button onClick={(e)=>changeStatus(index)} style={{backgroundColor:'grey' , justifyContent:'center'  }}>play</button>           
               }
            </div>
         </div>
     </>
         )
       }
    </div>
  )
}

export default Videos
