import React from 'react'
import Image from './Image'
import haedingStyle from '../assets/icons/Subtract.svg'
import cn from '../lib/cn'
function SubHeading({text,className}) {
  return (
    <div className={cn("flex gap-x-2 2xl:gap-x-5 items-center ms-[20px] 2xl:ms-[100px] mb-[10px] 2xl:mb-[45px]",className)}>
        <h2 className='font-bigShoulder font-black text-xl md:text-[30px] 2xl:text-[50px] 2xl:leading-[60px] uppercase text-white'>{text}</h2>
        <Image src={haedingStyle} className={`w-[15px] 2xl:w-auto`}/>
    </div>
  )
}

export default SubHeading