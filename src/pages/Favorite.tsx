import { useEffect } from "react"
import Card from "../components/card/Card"
import { useAppContext } from "../context/app.context"
import "./Favorite.css"
import { Movie } from "../context/types"

const Favorite = () => {
  const { favoriteMovies } = useAppContext()
  const favorites: Movie[] = [];
  favoriteMovies.forEach((value) => {
    favorites.push(value)
  })

  console.log({favorites})
  return (
    <>
      {favorites?.length > 0 ? (
        <div className="favorites">
          {favorites.map((movie: Movie) => (
            <Card movie={movie} />
          ))}
        </div>
      ) : (
        <div className="favorite_warning"> There is no favorite movie.</div>
      )}
    </>
  )
}

export default Favorite
