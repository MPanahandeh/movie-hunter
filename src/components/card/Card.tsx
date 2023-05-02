import { useAppContext, useAppDispatch } from "../../context/app.context"
import { AddOrRemoveFavorite } from "../../context/dispatchers"
import { Movie } from "../../context/types"
import noImage from "../../utils/no-image-available.png"
import "./Card.css"

const Card = ({ movie }: { movie: Movie }) => {

  const { favoriteMovies } = useAppContext()
  const dispatch = useAppDispatch()
  const handleFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({ dispatcher: AddOrRemoveFavorite, payload: movie })
  }
  return (
    <div className="card">
      {movie.Poster === "N/A" ? (
        <img src={noImage} alt={movie.Title} />
      ) : (
        <img src={movie.Poster} alt={movie.Title} />
      )}

      <div className="info">
        <span className="title">{movie.Title}</span>
        <div className="year-row">
          <span className="year">{movie.Year}</span>
          <div className="icon" onClick={handleFavorite}>
            {favoriteMovies.has(movie.imdbID) ? (
              <span className="star">&#x2665;</span>
            ) : (
              <span className="star">&#x2661;</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
