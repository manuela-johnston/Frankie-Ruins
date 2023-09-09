import './home.css'
import Scene from '../../components/Scene'
import HeroOverlay from './HeroOverlay'
import Featured from './Featured'
import VideoGallery from './VideoGallery'
import InstagramFeed from './InstagramFeed'
import Footer from '../../components/Footer'
import MiniBio from './MiniBio'

export default function Home() {
  return (
    <>
      <Scene eventSource={document.getElementById('root')}></Scene>
      <HeroOverlay />
      {/* <Featured style={{ height: '150px', backgroundColor: '#FFF4F8' }} /> */}
      <VideoGallery />
      <MiniBio />
      <InstagramFeed />
      <Footer />
    </>
  )
}
