import React from 'react'

function Container({children}) {
  return (
    <div className='container px-3 sm:px-0'>{children}</div>
  )
}

export default Container