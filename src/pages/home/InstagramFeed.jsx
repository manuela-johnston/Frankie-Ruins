import './home.css'

export default function instagramFeed() {
  return (
    <>
      <div className="ig-container">
        <h3 className="ig-handle">@FRANKIE_RUINS</h3>
        <div className="ig-grid">
          <div className="item-1 ig-pic">
            <img src="./snake.png" />
          </div>
          <div className="item-2 ig-pic">
            <img src="./finger-print-rings.png" />
          </div>
          <div className="item-3 ig-pic">
            <img src="./bowie.png" />
          </div>
        </div>
      </div>
    </>
  )
}
