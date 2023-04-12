import './home.css'
import Scene from '../../components/Scene'
import Nav from '../../components/header/Nav'
import Footer from '../../components/Footer'
import HeroOverlay from './HeroOverlay'

export default function Home() {
  return (
    <>
      <Scene eventSource={document.getElementById('root')}></Scene>
      <HeroOverlay />
    </>
  )
}
