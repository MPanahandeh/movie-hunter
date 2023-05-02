import React from "react"
import { SpinnerDotted } from "spinners-react"
import { useGetMoviesQuery } from "../../services/apiSlice"
import MovieCard from "../movie-card/MovieCard"
import Error from "../Error"

import "./Movies.css"
import { useAppContext } from "../../context/app.context"

const Movies = () => {
  const {activeQuery} = useAppContext()
  const deferredQuery = React.useDeferredValue(activeQuery)

  const { data, isFetching, isError, error } = useGetMoviesQuery(deferredQuery, {skip : deferredQuery === ''})

  const movies = data?.Search
  if (!!isError) {
    return <Error errorMessage={error} />
  }
  if (!!isFetching) {
    return <SpinnerDotted />
  }
  return (
    <>
      {activeQuery !== '' && (movies as Array<any>)?.length > 0 ? (
        <div className="movies">
          {movies?.map((movie: any) => {
            return <MovieCard movie={movie} />
          })}
        </div>
      ) : (
        <div className="search-warning">
          <p>Search a movie!</p>
          <p>i.e. Titanic</p>
        </div>
      )}
    </>
  )
}

export default Movies
