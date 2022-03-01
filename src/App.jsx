import React from 'react'
import './App.css';
import { Link, Route } from "wouter";
import ListOfGifs from './components/ListOfGifs';
import Home from './pages/home'




export default function App() {
  

  return (
    <div className="App">
      <section className="App-content">
        <Route 
        path="/"
        component={Home} />
        <Route 
         path="/gif/:keyword" 
         component={ListOfGifs} 
        />
      </section>
    </div>
  )
}
