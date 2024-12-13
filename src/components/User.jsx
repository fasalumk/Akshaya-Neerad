import React from 'react'
import UserNavbar from './Navbar/UserNavbar'
import Footer from './Footer/Footer'
import HeroSection from './User/HeroSection'
import Services from './User/Services'
import About from './User/About'
import Video from './User/Video'
import Location from './User/Location'
import Badges from './User/Badges'
import ContactButtons from './Admin/CounterImage/ContactButtons'

function User() {
  return (
    <>
    <div>
        <UserNavbar />
        <HeroSection />
        <Services />
        <ContactButtons />
        <Video />
        <Location />
        <Badges />
        <Footer />
    </div>
    </>
  )
}

export default User