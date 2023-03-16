import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';
import { PaginationControlled } from '../components/PaginationControlled';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('batman'); 

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }&page=1`
        )
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setMovies(data.Search);
            })
    };

    const getSelectedPage = (str, page) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=batman&page=1`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
    }, []);

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} setQuery={setQuery} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
            {!loading ? (
                <PaginationControlled getSelectedPage={getSelectedPage} movies={movies} setMovies={setMovies} query={query} />
            ) : (
                loading
            )}
        </main>
    );
};


export { Main };