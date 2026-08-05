import React from 'react'

const MistEffect = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {Array.from({length: 6}).map((_, index) => (
        <div key={index} className='absolute h-24 w-80 bg-white/80 blur-3xl rounded-full'
        style={{
            top: `${index * 18}%`,
            left: `${Math.random() * 60}%`,
            animation: `mistMove ${20 + index * 5}s ease-in-out infinitive`
        }}></div>
      ))}
    </div>
  )
}

export default MistEffect
