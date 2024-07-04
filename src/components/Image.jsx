import React from 'react'

function Image({src,className}) {
  return (
    <img src={src} alt={src} className={className} />
  )
}

export default Image