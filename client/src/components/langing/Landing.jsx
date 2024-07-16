import React from 'react'
import Navbar from '../signup-in/nav'
import Hero from './Hero'
import { Statistic } from './States'
import Cared from './Cared'

const Landing = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Statistic/>
        <Cared/>
        </>
    )
}

export default Landing
