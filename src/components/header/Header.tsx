import { Link, useLocation } from "react-router-dom"
import "./Header.css"

function FavoriteLink() {
  return  <Link to="/favorites" className="link">  "Favorites"</Link>
}
function HomeLink() {
  return  <Link to="/" className="link">  "Home"</Link>
}

const Header = () => {
  const { pathname } = useLocation()
  const RouteLink = pathname ===  "/" ?  FavoriteLink: HomeLink;
  return (
    <header>
      <nav>
        <div className="logo">Movie App</div>
        <div className="nav-item">
          <div className="nav-links">
            <li key="Favorites">
             {<RouteLink />}
            </li>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
