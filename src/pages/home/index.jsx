import React from 'react'
import { Creators, Trending, Discover, Browse, Info, Mashroom, Works } from '@components'

const Index = () => {
    return (
        <section id='home' className=' mt-[150px]'>
            <Discover />
            <Trending />
            <Creators />
            <Browse />
            <Info />
            <Mashroom />
            <Works />
        </section>
    )
}

export default Index