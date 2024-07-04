import React from 'react'

function Container({children,className}) {
  return (
    <div className={`container px-3 sm:px-0 ${className}`}>{children}</div>
  )
}

export default Container