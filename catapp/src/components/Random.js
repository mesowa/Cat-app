import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Random = () => {


  const [ cat, setCat ] = useState([])

  useEffect(() => {
    const getCat = async () => {
      const { data } = await axios('https://api.thecatapi.com/v1/breeds')
      setCat(data[Math.floor(Math.random() * data.length)])
    }
    getCat() 
  }, [])


  return (
    <div className='container d-flex flex-column'>
      <h1 className='text-center pt-5 -block fw-bolder text-black '>{cat.name}</h1>
      <hr/>
      <div className="grid-container m-5"> 
        <div className='grid-item pt-3 d-flex row justify-content-between bg-light'>
          <h6>Origin: {cat.origin}</h6>
          <h6>Affection level: {cat.affection_level}</h6>
          <h6>Intelligence level: {cat.intelligence}</h6>
          <h6>Energy level: {cat.energy_level}</h6>
          <p>{cat.description}</p>
        </div>
        <img src={cat.image && cat.image.url}></img>     
      </div>
    </div>
  )
} 

export default Random