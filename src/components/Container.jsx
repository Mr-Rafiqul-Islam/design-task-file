import React from 'react'

function Container({children,className}) {
  return (
    <div className={`container max-w-[1800px] ${className}`}>{children}</div>
  )
}

export default Container