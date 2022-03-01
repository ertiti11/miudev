import React from "react";
import { Link } from "wouter";
import "./index.css"

const POPULAR_GIFS = ["matrix", "futbol","muerto", "malaga"]

export default function Home(){
    return(
        <>
            <h3 className="App-title">Los gifs mas populares</h3>
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



