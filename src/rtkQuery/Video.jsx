import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers= {
    'x-rapidapi-key': '0a4a15f8b1msh67ff19cb5779a22p18611bjsn5726ff736a76',
    'x-rapidapi-host': 'imdb232.p.rapidapi.com'
}

export const videoApi = createApi({
    reducerPath : 'videoApi',
    baseQuery : fetchBaseQuery({
      baseUrl : 'http://imdb232.p.rapidapi.com',
      headers
    }),
    endpoints: (builder) => ({
        getVideo: builder.query({
          query: () => `/api/title/get-non-persisted-metadata?tt=tt0844653%2Ctt20215968%2Ctt0465494%2Ctt2679042`,
        }),
     })   
})

export const { useGetVideoQuery  } = videoApi ;