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
    <> 
      <div classsName='container d-flex'>
        <h1 className='text-center pt-5 -block'>{breedInfo.name}</h1>
        <hr/>
        <div className="grid-container m-5"> 
          <div className='grid-item pt-3 d-flex row justify-content-between'>
            <h6>Origin: {breedInfo.origin}</h6>
            <h6>Affection level: {breedInfo.affection_level}</h6>
            <h6>Intelligence level: {breedInfo.intelligence}</h6>
            <h6>Energy level: {breedInfo.energy_level}</h6>
            <p>{breedInfo.description}</p>
            
          </div>
          <h2 className='p-5 m-5'>IMAGE </h2>
          <img src={breedInfo.image && breedInfo.image.url}></img>      
        </div>
      </div>
    </>
  )
} 

export default CatPage
