import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <header>
        <div className="nav-bar">
          <h3 className="header-logo">
            <Link to="/" className="nav-a">
              FRANKIE RUINS
            </Link>
          </h3>
          <nav>
            <ul>
              <li>
                <Link to="/previouswork" className="nav-a">
                  Previous Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-a">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-a">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
