import React from 'react'
import { Creators, Trending, Discover } from '@components'

const Index = () => {
    return (
        <section id='home' className=' mt-[150px] px-[30px]'>
            <Discover />
            <Trending />
            <Creators />
        </section>
    )
}

export default Index