import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className = 'navbar'>
        <div className = 'name-tagline'>
          <Link to = "/ten-tick" className = "logo-link">
            <span className = 'ten-tick'> Ten-Tick </span>
            <p> Purchase Tennis Tickets Online </p>
          </Link>
        </div>
      
      <div className = 'navlinks'>
        <Link to = "/ten-tick">
          <span className = "home-button"> Home </span>
        </Link>
      </div>

    </div>
  );
}

export default NavBar
