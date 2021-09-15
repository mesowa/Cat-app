import React from 'react'
import img from '../images/IMG_3061.JPG'

const Home = () => {
  return (
    <>
      <div className='container'>
        <h1 className= 'text-center'>Welcome to Catopedia</h1>
        <img className="rounded mx-auto d-block" src={img}/>
      </div>
    </>
  )
}

export default Home
