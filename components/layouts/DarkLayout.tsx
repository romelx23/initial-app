import React, { FC } from 'react'

export const DarkLayout:FC = ({children}) => {
  return (
    <div style={{
        background: '#891ee0a7',
        padding: '10px', 
        borderRadius: '5px',
    }}>
        <h2>Dark Layout</h2>
        {children}
    </div>
  )
}
