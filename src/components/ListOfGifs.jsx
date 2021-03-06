import React, { useState, useEffect } from 'react'
import Gif from "./Gif";
import getGifs from '../services/getGifs';
import './ListOfGifs.css'
import { Link } from "wouter";
import Buscador from "./Buscador"

export default function ListOfGifs ({params}) {
    const {keyword} = params
    const [ loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

  useEffect(function () {
      setLoading(true)
    getGifs({keyword})
    .then(gifs =>{
        setGifs(gifs)
        setLoading(false)
  })
  }, [keyword])

  if (loading) return <p>cargando...</p>
  
    return (
      
      
    <div className="gif-div">
      <Buscador />
        <Link className="links" to={"/"} >Home</Link>
        
        
        {
        gifs.map(({id, title, url}) =>
          
            <Gif
                key={id}
                title={title} 
                url={url} 
                id={id} 
            />
           
            )
            }

        
        
        
          
          </div>
          
    )}