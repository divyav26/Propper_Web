import React from 'react'
import About from './About'
import Gallary from './Gallary'
import Footer from '../components/Footer'
import LogoBanner from './LogoBanner'
import Home from './Home'
import Header from '../components/Header'

const IndexPage = () => {
  return (
    <div>
    <Header />
    <Home />
    <About />
    <Gallary />
    <LogoBanner />
    <Footer />
    </div>
  )
}

export default IndexPage
