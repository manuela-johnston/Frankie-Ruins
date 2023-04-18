import YoutubeEmbed from './YoutubeEmbed'

export default function Gallery() {
  const pounamuRingVid = 'https://youtube.com/shorts/A4IcMA8iMvU'
  return (
    <>
      <div className="gallery-container">
        <div className="gallery">
          <div className="gal-item1">
            <YoutubeEmbed embedId="A4IcMA8iMvU" />
          </div>
        </div>
      </div>
    </>
  )
}
