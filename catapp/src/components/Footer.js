import React from 'react'
import img from '../images/paws1.png'

const  Footer = () => {
  return (
    <>
      <img className=" mx-auto d-block " src={img}/>
      <footer className="page-footer fixed-bottom bg-white text-center p-3">Made with <span>💖 </span> by <a href='https://github.com/williamalvarez92'>William</a> &#38; <a href='https://github.com/mesowa'>Meg</a> </footer>
    </>
  )
}

export default Footer