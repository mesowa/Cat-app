import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const CatPage = () => {

  const [ breedInfo,  setBreedInfo ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const getBreedInfo = async () => {
      try {
        const { data } = await axios(`https://api.thecatapi.com/v1/breeds/${id}`) 
        setBreedInfo(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getBreedInfo() 
  }, [id])
  
  console.log(breedInfo) 
  return ( 
    <div className='container d-flex flex-column'>
      <div>
        <h1 className='text-center pt-5 -block fw-bolder text-black '>{breedInfo.name}</h1>
      </div>
      <hr/>
      <div className="grid-container text-center justify-content-center m-5"> 
        <div className='grid-item pt-3 d-flex row justify-content-between bg-light'>
          <h6>Origin: {breedInfo.origin}</h6>
          <h6>Affection level: {breedInfo.affection_level}</h6>
          <h6>Intelligence level: {breedInfo.intelligence}</h6>
          <h6>Energy level: {breedInfo.energy_level}</h6>
          <p>{breedInfo.description}</p>
        </div> 
        <img src={breedInfo.image && breedInfo.image.url}></img> 
        <div>
          <h4 className='text-center pb-2' >Find out more about this breed:</h4>
          <div className='container d-flex justify-content-around'>
            <button type="button" className="btn btn-warning" src={breedInfo.wikipedia_url}>Wikipedia</button> 
            <button type="button" className="btn btn-warning" src={breedInfo.cfa_url}>CFA Website</button>  
          </div>
        </div>
      </div>
    </div> 
  )
} 

export default CatPage
