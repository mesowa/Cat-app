import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const FelineFilter = () => {

  const [ cats, setCats ] = useState([])
  const [ hasError, setHasError ] = useState(false)
  // const [ catPage, setCatPage ] = useState(0)
  // const [ catImage, setCatImage ] = useState('')

  // useEffect(() => {
  //   const increaseCatPage =  
  // })



  // useEffect(() => {
  //   const getCatImage = async () => {
  //     try {
  //       const { data } = await axios({`https://cdn2.thecatapi.com/images/${cats.image.id}.jpg`})
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

  //   const filteredCats = () => {
  //     return(

  //     )
  // }


  return (
    <>
      <h1 className="text-center">Feline Filter</h1>
      <hr />
      <div className="grid-container">
        <nav >
          <h2 className='text-centre m-5'>Filter by</h2>
          <hr/>
          <h3 className='text-center  m-2 p-1 '>Origin 🌏</h3>
          <select className='m-3 p-1'>
            {/* {cats.map((cat) => {
              return (
                <option key={cat.id}>{cat.origin}</option>
              )
            }
            )} */}
            {cats.length > 0 &&
              cats.reduce((acc, cat) => {
                return acc.includes(cat.origin) ? acc : [...acc, cat.origin]
              }, []).map((cat, i) => {
                return (
                  <option value={cat} key={i}>{cat}</option>
                )
              })
            }
          </select>
          <h3 className='text-center m-2 p-1'>Breed 🐈</h3>
          <select className='m-3 p-1'>
            {cats.map((cat) => {
              return (
                <option key={cat.id}>{cat.name}</option>
              )
            }
            )}
            <option> </option>
          </select>
        </nav>
        <div className="grid-container">
          {cats.map((cat) => {
            return (
              <>
                <div className="grid-item">
                  <p key={cat.id}>{cat.name} - {cat.origin}</p>
                  <button type="button" className="btn btn-warning"><Link to={`/CatPage/${cat.id}`}>Learn More</Link></button>
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

// {cats.length > 0 && cats.reduce((acc, cat) => {
//   console.log('acc ->', acc)
//   if (acc) {
//     return acc.includes(cat.origin) ? acc : [...acc, cat.origin]
//   }
//   return [acc] 
// }