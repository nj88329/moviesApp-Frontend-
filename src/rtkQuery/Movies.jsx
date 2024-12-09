import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const headers = {
    'x-rapidapi-key': '0a4a15f8b1msh67ff19cb5779a22p18611bjsn5726ff736a76',
    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
         baseUrl: 'https://movies-api14.p.rapidapi.com/',
         headers
        }),
    endpoints: (builder) => ({
      getAllMovies: builder.query({
        query: () => `movies`,
      }),
      getAllShows :  builder.query({
        query: () => `shows`,
      }),   
      getHome : ()=>({
        query : ()=> `home`
      })
    }),
  })   

  export const { useGetAllMoviesQuery , useGetAllShowsQuery , useGetHomeQuery } = moviesApi;
