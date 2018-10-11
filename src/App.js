import React, { Component } from 'react'
import Movie from './Movie'
import './App.css'
import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <main className="shelf">
          <Movie />
        </main>
      </body>
    )
  }
}
export default App
