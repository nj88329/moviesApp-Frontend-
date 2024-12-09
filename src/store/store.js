import { configureStore } from '@reduxjs/toolkit'
import  taskReducer  from '../features/taskSlice'
import { moviesApi } from '../rtkQuery/Movies'
import { videoApi } from '../rtkQuery/Video'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    [ moviesApi.reducerPath ] : moviesApi.reducer,
    [ videoApi.reducerPath ] : videoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( moviesApi.middleware , videoApi.middleware ),
  devTools: true
})