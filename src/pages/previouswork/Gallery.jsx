import YoutubeEmbed from './YoutubeEmbed'
import worksData from '../../../data.json'
import Work from './Work.jsx'

const Gallery = () => {
  let artWorks = worksData.map((work) => (
    <Work
      key={work.id}
      name={work.name}
      image={work.image}
      videoId={work.videoId}
    />
  ))
  return <div className="gallery">{artWorks}</div>
}

//  const pounamuRingVid = 'https://youtube.com/shorts/A4IcMA8iMvU'
// <div className="gallery-container">
// <div className="gallery">
//   <div className="gal-item1">
//     <YoutubeEmbed embedId="A4IcMA8iMvU" />
//   </div>

// </div>
// </div>

export default Gallery
