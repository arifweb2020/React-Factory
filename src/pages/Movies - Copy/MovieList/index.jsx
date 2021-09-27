import React from 'react';
import { Link } from 'react-router-dom'

function MovieList({ movieslist, handleFavouritesClick }) {
    return (
        <>
            <div className="col-lg-3 mb-5">
                <div className="card shadow">
                    <img className="card-img-top" src={movieslist.Poster} />
                    <div className="card-body d-flex justify-content-center">
                        <button className="btn btn-sm btn-primary" onClick={() => handleFavouritesClick(movieslist)}>Add Movies</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieList;