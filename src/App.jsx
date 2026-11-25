import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './assets/pages/Home'
import Profile from './assets/pages/Profile'
import Login from './assets/pages/Login'
import Contact from './assets/pages/Contact'
import Register from './assets/pages/Register'

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
