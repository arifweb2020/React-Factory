import React, { useState, useEffect } from 'react';
import FavList from './FavList';
import './index.scss'
import MovieList from './MovieList';
import { ToastContainer, toast } from "react-toastify";

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

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('favourites-movies')
        );

        if (movieFavourites) {
            setFav(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourites-movies', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...fav, movie];
        setFav(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        toast.success("movie added successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        });

    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = fav.filter((fav) => fav.imdbID !== movie.imdbID);
        setFav(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        toast.success("movie delete successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        });
    };

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
                        return <MovieList key={index} movieslist={item} handleFavouritesClick={addFavouriteMovie} removeFavouriteMovie={removeFavouriteMovie} />
                    })}

                </div>

                <div className="row mt-4">
                    <h2>Favourite Movie List</h2>
                    {fav.map((item, index) => {
                        return <FavList key={index} favlist={item} removeFavouriteMovie={removeFavouriteMovie} />
                    })}

                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
            />
        </div>
    );
}

export default Movies;