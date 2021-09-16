import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FelineFilter = () => {

  const [ cats, setCats ] = useState([])
  const [ hasError, setHasError ] = useState(false)
  const [ catImage, setCatImage ] = useState('')

  useEffect(() => {
    fetch(`https://cdn2.thecatapi.com/images/${cat.image.id}.jpg`)
  })

  useEffect(() => {
    const getCats = async () => {
      try {
        const { data } = await axios('https://api.thecatapi.com/v1/breeds')
        setCats(data)
        console.log(data)  
      } catch (err) {
        setHasError(true)
      }
    }
    getCats() 
  }, [])

  console.log('cats =>', typeof cats)
  
  
  // catImage = `https://cdn2.thecatapi.com/images/${cats.image.id}.jpg`
  
  return (
    <>
      <h1>Feline Filter</h1>
      <hr />
      <div className="grid-container">
        {cats.map((cat) => {
          return (
            <>
              <div className="grid-item">
                <p key={cat.id}>{cat.name} - {cat.origin}</p>
              </div>
            </>
          )
      
        })}
      </div>
      <h1>{hasError}</h1>
    </>
  ) 

}

export default FelineFilter
