import React, { useState } from "react";
import {useLocation} from "wouter";

export default function Buscador () {

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
            
            <form onSubmit={handleSubmit}>
                <input placeholder="Search Gifs..." onChange={handleChange} type="text" value={keyword}></input>
            </form>
        </>
    )

}