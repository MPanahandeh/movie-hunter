import { Suspense } from "react"
import { SpinnerRoundFilled } from "spinners-react"

import Movies from "../components/movies/Movies"
import "./Home.css"
import Search from "../components/input/Search"

const Home = () => {
  return (
    <div className="home-container">
      <Search  />
      <Suspense fallback={<SpinnerRoundFilled />}>
        <Movies />
      </Suspense>
    </div>
  )
}

export default Home
