import React from 'react'

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
        <div className="cpy">
            <h6>© {date} / baljeetism</h6>
        </div>
      
    </div>
  )
}
