import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const FelineFilter = () => {

  const [ cats, setCats ] = useState([])
  const [ hasError, setHasError ] = useState(false)
  // const [ catImage, setCatImage ] = useState('')

  // useEffect(() => {
  //   const getCatImage = async () => {
  //     try {
  //       const { data } = await axios(`https://cdn2.thecatapi.com/images/${cats.image.id}.jpg`)
  //       setCatImage(data)
  //     } catch (err) {
  //       setHasError(true)
  //     }
  //   }
  //   getCatImage()
  // })

  // console.log('cat image url=>', catImage)

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

  return (
    <>
      <h1>Feline Filter</h1>
      <hr />
      <div className="grid-container">
        <nav >
          <h2 className='text-centre m-5'>Filter by</h2>
          <hr/>
          <h3 className=' m-2 p-1 '>Origin 🌏</h3>
          <select className='m-3 p-1'>
            <option>Country 1</option>
            <option>Country 2</option>
            <option>Country 3</option>
          </select>
          <h3 className='m-2 p-1'>Breed 🐈</h3>
          <select className='m-3 p-1'>
            <option>Breed 1</option>
            <option>Breed 2</option>
            <option>Breed 3</option>
            <option> </option>
          </select>
        </nav>
        <div className="grid-container">
          {cats.map((cat) => {
            return (
              <>
                <div className="grid-item">
                  <p key={cat.id}>{cat.name} - {cat.origin}</p>
                  <button><Link to="/CatPage">Learn More</Link></button>
                </div>
              </>
            )
        
          })}
        </div>
        <h1>{hasError}</h1>
      </div>
    </>
  ) 

}

export default FelineFilter
