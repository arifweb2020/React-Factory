import React, { useState, useEffect } from 'react';
import './index.scss'
import MovieList from './MovieList';

function Movies() {
    const [movies, setMovies] = useState([])
    const [moviesSearch, setMoviesSearch] = useState('')
    const [fav, setFav] = useState([])

    useEffect(() => {
        getMovies(moviesSearch)
    }, [moviesSearch])

    const getMovies = async (searchValues) => {
        const url = `http://www.omdbapi.com/?s=${searchValues}&apikey=263d22d8`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson.Search);
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    return (
        <div className="moviesContainer">
            <div className="jumbotron text-center">
                <h1>Movies List </h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <input
                            className='form-control'
                            value={moviesSearch}
                            onChange={(event) => setMoviesSearch(event.target.value)}
                            placeholder='Type to search...'
                        />
                    </div>
                </div>
                <div className="row mt-4">

                    {movies.map((item, index) => {
                        return <MovieList key={index} movieslist={item} />
                    })}

                </div>
            </div>

        </div>
    );
}

export default Movies;