import React from 'react'
import AdminNavbar from './Navbar/AdminNavbar'
import HeroSection from './Admin/HeroSection'
import LinkPage from './Admin/LinkPage'
import DateandTime from './Admin/DateandTime'
import Footer from './Footer/Footer'
import CounterImage from './Admin/CounterImage/CounterImage'
import ContactButtons from './Admin/CounterImage/ContactButtons'

function Admin() {
  return (
    <>
    <div>
        <AdminNavbar />
        <DateandTime />
        <HeroSection />
        <LinkPage />
        <CounterImage />
        <ContactButtons />
        <Footer />
        
    </div>
    </>
  )
}

export default Admin