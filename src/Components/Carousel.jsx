import { useState } from 'react'
<<<<<<< HEAD:vite-project/src/Components/Carousel.jsx
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"


const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}



 const Carousel = ({items}) =>{

  const [[imageCount, direction], setImageCount] = useState([0, 0])


  console.log('item',items[0].node.item.latestTrailer.thumbnail.url)
  const activeImageIndex = wrap(0, items?.length, imageCount)

  const swipeToImage = swipeDirection => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }
 
  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = imageId => {
    let changeDirection
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection])
  }


  return (
   
  <main>
  <div className="slider-container">
    <div className="slider">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={imageCount}
          style={{
            backgroundImage: `url(${items[activeImageIndex]?.node.item.latestTrailer.thumbnail.url})`
          }}
          
          custom={direction}
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={sliderTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          className="image"
        />
      </AnimatePresence>
    </div>

    <div className="buttons">
      <button onClick={() => swipeToImage(-1)}>PREV</button>
      <button onClick={() => swipeToImage(1)}>NEXT</button>
    </div>
  </div>

  <div className="thumbnails">
    {items?.map((image,id) => (
      <div
        key={image.id}
        onClick={() => skipToImage(id)}
        className="thumbnail-container"
      >
        <img src={image.node.item.latestTrailer?.thumbnail.url} alt="Musician" />
        <div
          className={`active-indicator ${
            id === activeImageIndex ? "active" : null
          }`}
        />
      </div>
    ))}
  </div>
</main>
=======
import { useSpringCarousel  } from 'react-spring-carousel';
import ReactPlayer from 'react-player'

 const Carousel = ({items}) =>{

  const [activeItem, setActiveItem] = useState(0)
    
  console.log('items', items)

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
        <img src={i.node.item.latestTrailer.thumbnail.url}
        style={{width:'45vw' , height:'40vh'}}/>
       
    </div>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      console.log("scrollstarted, next item id:", event.nextItem.id);
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
>>>>>>> origin/main:src/Components/Carousel.jsx
  );
}




export default Carousel