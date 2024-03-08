import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg'

import MovieCard from './MovieCard';
// fb8c4bfd

const API_URL="http://www.omdbapi.com?apikey=fb8c4bfd";

const movie={
  
    "Title": "The Avengers",
    "Year": "1998",
    "imdbID": "tt0118661",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"


}
const App= () => {

  const[movies,setMovies]= useState([]);

  const[searchTerm,setsearchTerm]=useState('');

  const searchMovies= async (title) =>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search);
  }
    useEffect(()=>{
      searchMovies('avengers');

    },[]);
  
  return (
    <div className="app">
      <h1>Movie Universe</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}/>
         <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)}/>
      </div>

      {
        movies?.length>0
        ? (
          <div className='container'>
          {movies.map((movie)=> (
            <MovieCard movie={movie}/>
          ))}
  
        </div>
          
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
            </div>

        )


      }
    
    </div>
  );
}

export default App;
