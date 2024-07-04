import React from 'react'
import Image from '../Image'
import logo from '../../assets/images/logo.svg'
import user from '../../assets/icons/user.svg'
import Button from '../Button'
import { RiMenu2Line } from "react-icons/ri";
import { LuCrown } from "react-icons/lu";
import Container from '../Container';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='py-5 bg-black/30 fixed z-10 top-0 left-0 w-full'>
        <Container >
            <div className="flex items-center justify-between gap-y-4">
                {/* logo */}
                <div className='flex gap-x-[34px] items-center flex-row-reverse sm:flex-row'>
                    <Link to={"/"}><Image src={logo} className={`h-auto w-auto`}/></Link>
                    <div className="grid place-content-center cursor-pointer w-[50px] h-[50px] rounded-full border border-white/40">
                    <RiMenu2Line size={24} className='text-[#E2E2E2]'/>
                    </div>
                </div>
                {/* btn & user */}
                <div className="flex gap-x-4 items-center">
                    {/* btn */}
                <Button text="subscribe now" icon={<LuCrown size={16} className='text-[#E2E2E2]'/>} className={`!py-[15px] !px-[25px] hidden sm:flex`}/>
                {/* user icon*/}
                <Image src={user} className={`h-auto w-auto cursor-pointer`}/>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header