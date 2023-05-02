import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (movie) => `?s=${movie}&apikey=9488e594`
    }),
    getMovie: builder.query({
      query: (movie) => `?i=${movie}&&plot=full&apikey=9488e594`
    })
  })
});

export const { useGetMovieQuery, useGetMoviesQuery } = apiSlice;
