import React from 'react'
import { useEffect, useState } from 'react';

function Home() {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=3044afc915e1301ae1d9551614db3711&language=en-US&page=1')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        })
        .catch(err => console.error(err));
    }, [])

  return (
    <div>
        <div className='movie'>
          {movies.map(movie => (
            <div id={movie.id} key={movie.id}>
              {/* <img alt="alt" src={`https://api.themoviedb.org${movie.poster_path}`}/> */}
              <div>{movie.title}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home
