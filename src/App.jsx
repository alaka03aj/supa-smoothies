import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <h1 className='supa-title'>Supa-Smoothies</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
