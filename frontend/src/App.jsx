import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Trend from './pages/Trends'
import Contact from './pages/Contact'
import Blog from './pages/TrendsBlog'
import ScrollToTop from './components/ScrollToTop'
import Description from './components/Legal/Disclaimer'
import TermsConditions from './components/Legal/TermsConditions'
import PrivacyPolicy from './components/Legal/PrivacyPolicy'

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
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trends" element={<Trend />} />
          <Route path="/trendsblog" element={<Blog />} />
          <Route path="/disclaimer" element={<Description />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
