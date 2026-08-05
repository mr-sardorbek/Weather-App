import React, { useMemo } from 'react'

const SnowEffect = () => {

    const snowFlaces = useMemo(() => {
     return Array.from({length: 25}, () => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 4
     }))
    },[])
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {snowFlaces.map((flake, index) => (
        <div key={index}
        className='absolute rounded-full bg-white/80'
        style={{
            width:`${flake.size}px`,
            height:`${flake.size}px`,
            left:`${flake.left}%`,
            top: "-20px",
            animation: `snowFall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`
        }}>
           
        </div>
      ))}
    </div>
  )
}

export default SnowEffect
