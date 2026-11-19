import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Griya MDP</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    
        {/* Routes Outlet */}
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    </>
  )
}

export default App
