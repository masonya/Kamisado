import React from 'react'

export default function Square({ black, children }) {
  return (
    <div
      style={{
        width: '100%',
        height: '25vh'
      }}
    >
      {children}
    </div>
  )
}
