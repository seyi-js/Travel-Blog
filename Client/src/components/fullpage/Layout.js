import React from 'react'
import Hero from '../Hero'
import NavBar from '../NavBar'
import Continents from '../Continents'
import Contact from '../Contact'
import Footer from '../Footer'
function Layout() {
    return (
        <div class="tm-page-wrap mx-auto">
            <Hero />
            <Continents />
            <NavBar />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Layout
