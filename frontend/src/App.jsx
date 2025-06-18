import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/footer'

// Layout component to include the Header on all pages
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

// Main App component with routing
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
