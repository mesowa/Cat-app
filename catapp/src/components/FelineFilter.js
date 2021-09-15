import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FelineFilter = () => {

  const [cats, setCats] = useState([])
  const [ hasError, setHasError ] = useState(false)



  useEffect(() => {
    const getCats = async () => {
      try {
        const { data } = await axios('https://api.thecatapi.com/v1/breeds')
        setCats(data)        
      } catch (err) {
        setHasError(true)
      }
    }
    getCats() 
  }, [])
  console.log('cats =>', typeof cats)
  return (
    <>
      <h1>Feline Filter</h1>  
      <h1>{cats.map(x=> <div key={x.id}> {x.name} {x.origin}</div>)} </h1> 
      {/* map through cats and retuirn by id & origin*/}
      <h1>{hasError}</h1>
    </>
  ) 

}

export default FelineFilter
