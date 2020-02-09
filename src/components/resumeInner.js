import React from 'react'

export default function resumeInner({ name, period, desc }) {
  return (
    <div className='resumeInner'>
      <h3>{name}</h3>
      <p className='period'>{period}</p>
      <p className='text'>{desc}</p>
    </div>
  )
}
