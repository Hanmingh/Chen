import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Events from './pages/events'
import Member from './pages/member'
import Pri from './pages/pri'
import { Navbar } from './components/navbar'

function App() {

  return (
    <BrowserRouter>
      <div className="w-[80%] lg:w-[60%] mx-auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/member" element={<Member/>} />
          <Route path="/pri" element={<Pri/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
