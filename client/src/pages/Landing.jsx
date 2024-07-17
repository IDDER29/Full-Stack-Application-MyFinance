import React from 'react'
import Navbar from '../components/Layout/nav'
import Hero from '../components/langing/Hero'
import { Statistic } from '../components/langing/States'
import Cared from '../components/langing/Cared'
import HorisontalCard from '../components/langing/HoresontalCard'
import Footer from '../components/Layout/Footer'

const Landing = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Statistic/>
        <Cared/>
        <HorisontalCard/>
        <Footer/>
        </>
    )
}

export default Landing
