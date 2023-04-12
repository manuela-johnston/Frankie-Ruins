import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-padding">
          <div className="footer-links">
            <div className="footer-links-div">
              <Link to="/" className="footer-logo">
                <h3>FRANKIE RUINS</h3>
              </Link>
            </div>

            <div className="footer-links-div">
              <Link to="/previouswork">
                <h5>Previous Work</h5>
              </Link>
            </div>

            <div className="footer-links-div">
              <Link to="/about">
                <h5>About</h5>
              </Link>

              <Link to="/process" target="_blank">
                <p>The bespoke process</p>
              </Link>
              <Link to="https://oronegro.co.nz/" target="_blank">
                <p>Oro Negro Jewellery</p>
              </Link>
            </div>

            <div className="footer-links-div">
              <Link to="/contact">
                <h5>Contact</h5>
              </Link>
              <Link
                to="https://www.instagram.com/frankie_ruins/"
                target="_blank"
              >
                <p>Instagram</p>
              </Link>
              <Link to="https://www.facebook.com/FrankieRuins" target="_blank">
                <p>Facebook</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-copyright"></div>
        <p>Copyright © {new Date().getFullYear()} Frankie Ruins</p>
      </div>
    </>
  )
}
