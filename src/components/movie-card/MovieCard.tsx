import React from "react"

import { Link } from "react-router-dom"
import Card from "../card/Card"

import "./MovieCard.css"
import { Movie } from "../../context/types"

const MovieCard = ({movie}: {movie: Movie}) => {
  return (
    <Link
      to={`movies/${movie.imdbID}`}
      className="text-link"
      key={movie.imdbID}
    >
      <Card
        movie={movie}
      />
    </Link>
  )
}

export default MovieCard
