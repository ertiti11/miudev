import React, {useState} from "react";
import { Link, useLocation } from "wouter";
import "./index.css"
import Buscador from "../../components/Buscador";
const POPULAR_GIFS = ["matrix", "futbol","muerto", "malaga"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/gif/${keyword}`)

    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
        
    } 



    return(
        <>
            <h3 className="App-title">Los gifs mas populares</h3>
            <Buscador />
                <ul className="links">
                    {POPULAR_GIFS.map((popularGif) =>(
                        <li  key={popularGif}>
                        <Link to={`/gif/${popularGif}`}>Gifs de {popularGif}</Link>
                        </li>
                    ))}
                </ul>
        </>
    )
}



