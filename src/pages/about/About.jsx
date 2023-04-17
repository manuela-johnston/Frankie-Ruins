import './about.css'
import Footer from '../../components/Footer'
import Bio from './Bio'
import BioVid from './BioVid'

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="about-content">
          <Bio />
        </div>
        <BioVid />
      </div>
      <Footer className="footer" />
    </>
  )
}
