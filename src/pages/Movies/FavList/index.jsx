import React from 'react';

function FavList({ favlist, removeFavouriteMovie }) {
    return (
        <>
            {/* <div className="jumbotron text-center">
                <h1>Fav Movies List </h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
             <div className="col-lg-4 mb-5">
                <div className="card">
                    <img className="card-img-top" src={movieslist.Poster} />
                    <div className="card-body d-flex justify-content-center">
                        <button className="btn btn-sm btn-danger ml-2" onClick={() => removeFavouriteMovie(movieslist)}>Delete</button>
                    </div>
                </div>
            </div>  */}
            <div className="col-lg-3 mb-5">
                <div className="card mt-4">
                    <img className="card-img-top" src={favlist.Poster} />
                    <div className="card-body d-flex justify-content-center">
                        <button className="btn btn-sm btn-warning" onClick={() => removeFavouriteMovie(favlist)}>Delete Movies</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavList;