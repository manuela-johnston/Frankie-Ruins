import './about.css'
import Footer from '../../components/Footer'
import Bio from './Bio'
import BioVid from './BioVid'

export default function About() {
  return (
    <>
      <div className="about-page">
        <Bio />
        <BioVid />
        <Footer />
      </div>
    </>
  )
}
