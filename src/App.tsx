import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Events from './pages/events'
import Member from './pages/member'
import Pri from './pages/pri'
import Research from './pages/research'
import Teaching from './pages/teaching'
import Fuelture from './pages/projects/fuelture'
import { Navbar } from './components/navbar'

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/teaching" element={<Teaching/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/member" element={<Member/>} />
        <Route path="/pri" element={<Pri/>} />
        <Route path="/research/fuelture" element={<Fuelture/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
