import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div className='pt-5'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
