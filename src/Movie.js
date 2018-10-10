import React, { Component } from 'react'
import Data from './Data.json'

class Movie extends Component {
  render() {
    return (
      <>
        {Data.results.map(result => {
          return (
            <section className="container">
              <div className="titleimg">
                <p>{result.title}</p>

                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                    result.poster_path
                  }`}
                  alt="posters"
                />
                <p>{result.overview}</p>
              </div>
            </section>
          )
        })}
      </>
    )
  }
}

export default Movie
