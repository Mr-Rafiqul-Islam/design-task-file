import React from 'react'
import cn from '../lib/cn'
function Button({icon,text,className}) {
  return (
    <button className={cn(`bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C] text-white font-bold font-bigShoulder text-[18px] py-[15px] px-[25px] 2xl:py-[29px] 2xl:px-[46px] rounded-full flex gap-x-2 items-center uppercase`, className)}>{icon}{text}</button>
  )
}

export default Button