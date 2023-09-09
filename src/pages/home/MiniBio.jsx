import './home.css'
import { Link } from 'react-router-dom'

export default function MiniBio() {
  return (
    <>
      <div className="bio-background">
        <div className="bio-content">
          <div className="bio-column2">
            <div>
              <img className="mini_bio_img" src="./bench.png" />
            </div>
          </div>
          <div className="bio-column1">
            <h5 className="mini-bio-heading">ABOUT</h5>
            <h1 className="bio-heading">Bespoke Handcrafted Jewellery</h1>
            <p className="bio-p">
              Frankie Ruins is a bespoke jewellery brand established in 2017 in
              Auckland, New Zealand. Handcrafted by fourth-generation jeweller
              Sebastian Ovalle, the brand offers one-of-a-kind pieces that are
              both timeless and contemporary, designed to tell the unique
              stories of each individual client.
            </p>
            <Link to="/about">
              <button className="bio-button">FIND OUT MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
