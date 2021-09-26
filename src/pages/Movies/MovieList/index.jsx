import React from 'react';

function MovieList({ movieslist }) {
    return (
        <>
            <div className="col-lg-4 mb-5">
                <div className="card">
                    <img className="card-img-top" src={movieslist.Poster} />
                </div>
            </div>
        </>
    );
}

export default MovieList;