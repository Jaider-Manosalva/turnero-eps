import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './features/auth/Login'
import Admin from './features/admin/Admin'
import TvSelect from './features/tv/TvSelect'
import TvFull from './features/tv/TvFull'
import TvMedia from './features/tv/TvMedia'
import KioskForm from './features/kiosk/KioskForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tv" element={<TvSelect />} />
        <Route path="/tv/full" element={<TvFull />} />
        <Route path="/tv/media" element={<TvMedia />} />
        <Route path="/kiosk" element={<KioskForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
