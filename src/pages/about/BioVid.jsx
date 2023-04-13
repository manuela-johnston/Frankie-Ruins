import promoVideo from '../../assets/jeweller-hands.mp4'

export default function BioVid() {
  return (
    <>
      <div className="BioVid">
        <video src={promoVideo} autoPlay loop muted />
      </div>
    </>
  )
}
