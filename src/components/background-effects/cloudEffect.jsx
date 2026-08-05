import React, { useMemo } from 'react'
import { FaCloud } from 'react-icons/fa'

const CloudEffect = () => {

  const clouds = useMemo(() => {
    return Array.from({length:6}, () => ({
      left: Math.random() *100,
      top: 5 + Math.random() * 30,
      size: 60 + Math.random() * 60,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 10
    }))
  },[])
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {clouds.map((cloud, index) => (
        <FaCloud key={index} size={cloud.size} className='absolute text-white/30 drop-shadow-lg'
        style={{
          left: `${cloud.left}%`,
          top: `${cloud.top}%`,
          animation:`cloudMove ${cloud.duration}s linear infinite`,
          animationDelay: `${cloud.delay}s`
        }} />
      ))}
      
    </div>
  )
}

export default CloudEffect
