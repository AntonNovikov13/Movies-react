import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <>
            <div className='movies'>
                {movies.length ? (
                    movies.map((movie) => (
                        <Movie key={movie.imdbID} {...movie}></Movie>
                    ))
                ) : (
                    <h1 className='search__error'>
                        Search not found. Try again.
                    </h1>
                )}
            </div>
        </>
    );
}

export { Movies };
