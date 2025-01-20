import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
      </Routes>
    </>
  )
}

export default App