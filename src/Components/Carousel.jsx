import { useState } from 'react'
import { useSpringCarousel  } from 'react-spring-carousel';


 const Carousel = ({items}) =>{

  const [activeItem, setActiveItem] = useState(0)
    
  console.log('itemsincarousel', items)

//   if (showExtraItems) {
//     items.push(...extraItems);
//   } else {
//     items = items.filter((i) => !i.id.includes("extra-item"));
//   }

  const { 
    thumbFragment,
    useListenToCustomEvent,
    carouselFragment, 
    slideToPrevItem, 
    slideToNextItem ,
  } = useSpringCarousel({
    gutter:8,
    withLoop: true,
    
    //  withThumbs: true,
    prepareThumbsData(items) {
      return [
        ...items,
      ]
    },
    items: items?.map((i , index) => ({
        id:index,
      renderItem: (
    <div >
        <img src={i.node.item.latestTrailer.thumbnail.url} style={{height : '45vh', width : '70vw'}}
        />
    </div>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.id)
    } 
  });

  return (
    <div style={{display:'inline'}}>
      <div><button onClick={slideToNextItem}>Next item</button></div>
      <div>
          {carouselFragment}
      </div>
      <div >
          {thumbFragment}
      </div>
      <button onClick={slideToPrevItem}>Prev item</button>
      </div>
  );
}




export default Carousel