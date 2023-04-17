import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

import Nav from './components/header/Nav'
import Footer from './components/Footer.jsx'
import Scene from './components/Scene'

import Home from './pages/home/Home.jsx'
import PreviousWork from './pages/previouswork/PreviousWork.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: 'transparent', minHeight: '100' }}
    >
      <div className="main-container">
        <main>
          <header>
            <Nav />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/previouswork" element={<PreviousWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      {/* <footer>
        <Footer className="sticky-footer" />
      </footer> */}
    </div>
  )
}

export default App
