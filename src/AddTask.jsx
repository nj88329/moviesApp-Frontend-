
import {addToWatchList} from './Components/Watchlist'

const AddTask = () => {

    console.log('add', addToWatchList)
  return (
    <div>
        
        <button onClick={addToWatchList}>Add Task</button>

    </div>
  )
}

export default AddTask
