import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const base_url = `http://www.omdbapi.com/?apikey=${API_KEY}`;

function PaginationControlled({ movies, setMovies, getSelectedPage, query }) {
    const [page, setPage] = useState(1); 
    const [pageAmount, setPageAmount] = useState(getAmountPages); 

    function getAmountPages() {
        axios.get(base_url + `&s=${query}&page=${page}`).then(({ data }) => {
            setPageAmount(Math.floor(data.totalResults / 10));
        });
    }

    const handleChange = (event, value) => {
        setPage(value);
        getSelectedPage(page);
    };

    useEffect(() => {
        axios.get(base_url + `&s=${query}&page=${page}`).then(({ data }) => {
            console.log(data);
            setMovies(data.Search);
            setPageAmount(getAmountPages);
        });
    }, [query, page]);

    return (
        <Stack spacing={2}>
            {!!setPageAmount && (
                <Pagination
                    className='pagination'
                    count={pageAmount}
                    page={page}
                    onChange={handleChange}
                />
            )}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.imdbID} />
                ))}
            </ul>
        </Stack>
    );
}

PaginationControlled.defaultProps = {
    count: 10,
};

export { PaginationControlled };

