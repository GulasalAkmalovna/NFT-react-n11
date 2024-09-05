import React from 'react'
import { Creators, Trending, Discover, Browse, Info } from '@components'

const Index = () => {
    return (
        <section id='home' className=' mt-[150px] px-[30px]'>
            <Discover />
            <Trending />
            <Creators />
            <Browse />
            <Info />
        </section>
    )
}

export default Index