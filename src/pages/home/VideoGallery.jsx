import promoVideo from '../../assets/promo-video.mp4'

export default function VideoGallery() {
  return (
    <>
      <div className="videoGallery">
        <video src={promoVideo} autoPlay loop muted />
      </div>
    </>
  )
}
