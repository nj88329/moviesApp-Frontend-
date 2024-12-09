import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers= {
    'x-rapidapi-key': '0a4a15f8b1msh67ff19cb5779a22p18611bjsn5726ff736a76',
    'x-rapidapi-host': 'imdb232.p.rapidapi.com'
}

export const videoApi = createApi({
    reducerPath : 'videoApi',
    baseQuery : fetchBaseQuery({
      baseUrl : 'https://imdb232.p.rapidapi.com',
      headers
    }),
    endpoints: (builder) => ({
        getVideo: builder.query({
          query: () => `/api/title/get-top-trending-video-trailers?limit=20`,
        }),
     })   
})

export const { useGetVideoQuery  } = videoApi ;