import React from 'react'
import Image from './Image'
import haedingStyle from '../assets/icons/Subtract.svg'
import cn from '../lib/cn'
function SubHeading({text,className}) {
  return (
    <div className={cn("flex gap-x-5 items-center ms-[100px] mb-[45px]",className)}>
        <h2 className='font-bigShoulder font-black text-[50px] leading-[60px] uppercase text-white'>{text}</h2>
        <Image src={haedingStyle}/>
    </div>
  )
}

export default SubHeading