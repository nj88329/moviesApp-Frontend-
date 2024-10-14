import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 task :[],
 completedTask : []
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
   
    toDoTask: (state, action) => {

      if (state.task.length !== 0) {
        state.task = [...state.task, {...action.payload,taskStatus: 'To Do'}];
        state.task = JSON.parse(JSON.stringify(state.task));
      } else {
        state.task = [{...action.payload,taskStatus: 'To Do'}];
      }
     console.log('Cleaned Task Array:', state.task);
    },
     doneTask : (state,action)=>{
      console.log( 'dropped' ,action.payload) ;
      let newArray = [];  
        try{
           newArray = state.task.filter((item) => 
           {
               if( item._id === action.payload )
               {
                // state.completedTask.length > 0 ? state.completedTask = [item] :  state.completedTask = [...state.completedTask, item]  ;
                item.taskStatus = 'Done'
                state.completedTask = [...state.completedTask, item];
               }else{
                return item;
               }
           }
            //  item._id === action.payload ? (state.completedTask.length > 0 ? state.completedTask = [item] :  state.completedTask = [...state.completedTask, item]  ) : item
          );
          state.task = newArray;
          console.log('trimmed',state.task)
          console.log('compled', state.completedTask)
          }catch(err){
              console.log(err)
          }
     }
  },
})

// Action creators are generated for each case reducer function
export const { toDoTask , doneTask  } = taskSlice.actions

export default taskSlice.reducer