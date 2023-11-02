import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen flex flex-row justify-around p-10 text-lg">
        <p>Crafted with passion by {" "}
          <a href="http://quezar.xyz" className="hover:underline">Quezar</a>
          .
        </p>
    </div>
  )
}

export default Footer