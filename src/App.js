import React, { Component } from 'react'
import Movie from './Movie'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <ul>
            <li>Home</li>
            <li>Top Movies</li>
            <li>Date Released</li>
          </ul>
        </header>
        <Movie />
      </>
    )
  }
}
export default App
