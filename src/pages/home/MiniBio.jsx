import './home.css'

export default function MiniBio() {
  return (
    <>
      <div className="bio-background">
        <div className="bio-content">
          <div className="bio-column1">
            <h5 className="mini-bio-heading">ABOUT</h5>
            <h1 className="bio-heading">
              Bespoke <br></br>handcrafted <br></br>jewellery
            </h1>
            <p className="bio-p">
              Frankie Ruins is a bespoke jewellery brand established in 2017 in
              Auckland, New Zealand. Handcrafted by fourth-generation jeweller
              Sebastian Ovalle, the brand offers one-of-a-kind pieces that are
              both timeless and contemporary, designed to tell the unique
              stories of each individual client.
            </p>
            <button className="bio-button">FIND OUT MORE</button>
          </div>
          <div className="bio-column2">
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}
