import { configureStore } from '@reduxjs/toolkit'
import  taskReducer  from '../features/taskSlice'
import { moviesApi } from '../rtkQuery/Movies'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    [ moviesApi.reducerPath ] : moviesApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( moviesApi.middleware ),
  devTools: true
})