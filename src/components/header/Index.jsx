import { BiMenuAltLeft } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/nft-logo.svg'

const Index = () => {
    return (
        <header className='w-full bg-[rgba(60,45,78,0.41)] text-white py-[20px] flex items-center fixed z-10 top-0 left-0 backdrop-blur-[20px]'>
            <div className="container  px-[30px]  m-auto px-[30px] box-content" >
                <nav className=' flex items-center justify-between gap-4  '>
                    <span>
                        <NavLink to="/"><img src={logo} alt="" /></NavLink>
                    </span>
                    <ul className='hidden lg:flex gap-[30px] items-center text-[16px] font-[600] leading-[22.4px] '>
                        <li>
                            <NavLink to="marketplace" >Marketplace</NavLink>
                        </li>
                        <li>
                            <NavLink to="rankings" >Rankings</NavLink>
                        </li>
                        <li>
                            <NavLink to="connectWallet" >Connect a wallet</NavLink>
                        </li>
                        <li className="w-[152px] min-h-[62px] bg-[#A259FF] flex items-center justify-center rounded-[20px]">
                            <NavLink to="auth" >
                                <span className="flex items-center gap-[12px] font-[600] leading-[22.4px]">
                                    <RxPerson />
                                    Sign Up
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <span className="lg:hidden">
                        <BiMenuAltLeft className="text-[32px]" />
                    </span>
                </nav>
            </div>

        </header>
    )
}

export default Index