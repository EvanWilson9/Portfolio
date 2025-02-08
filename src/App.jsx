import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import EverythingPasta from './projects/EverythingPasta'
import StandardBarbecue from './projects/StandardBarbecue'
import MindfulConnections from './projects/MindfulConnections'
import SavannasSweets from './projects/SavannasSweets'
import ChessGuessr from './projects/ChessGuessr'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/everythingpasta" element={<EverythingPasta />}/>
        <Route path="/standardbarbecue" element={<StandardBarbecue />}/>
        <Route path="/mindfulconnections" element={<MindfulConnections />}/>
        <Route path="/savannassweets" element={<SavannasSweets />}/>
        <Route path="/chessguessr" element={<ChessGuessr />}/>
      </Routes>
    </>
  )
}

export default App