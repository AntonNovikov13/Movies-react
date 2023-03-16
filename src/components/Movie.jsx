import React, { useState } from 'react';
import { Modal } from './Modal';

function Movie(props) {
    const [modalActive, setModalActive] = useState(false);

    const {
        Title: title,
        Type: type,
        Year: year,
        imdbID: id,
        Poster: poster,

        Value: grade,
        Ratings: ratings,
        Genre: genre,
        Runtime: runtime,
        Director: director,
        Writer: writer,
        Awards: awards,
        Actors: actors,
        Plot: plot,
    } = props;

    const modalBackground = {
        backgroundImage: `url(${poster})`,
        backgroundRepeat: 'no-repeat',
        height: '450px',
        backgroundSize: '300px',
        border: '5px solid transparent',
        borderRadius: '25px',
    };
    const contentModal = {
        display: 'block',
    };

    return (
        <>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>
                    <div>
                        <h2 className='modal-title'>{title}</h2>
                        <h5 className='modal-type'>{type}</h5>
                    </div>
                    <div style={modalBackground} className='modal-content'>
                        <div
                            style={contentModal}
                            className='modal-content__description'
                        >
                            <h6>Year: {year}</h6>
                            <h6>ImdbID: {id}</h6>
                            <h6>Grade: {grade}</h6>
                            <h6>Ratings: {ratings}</h6>
                            <h6>Genre: {genre}</h6>
                            <h6>Runtime: {runtime}</h6>
                            <h6>Director: {director}</h6>
                            <h6>Writer: {writer}</h6>
                            <h6>Awards: {awards}</h6>
                            <h6>Actors: {actors}</h6>
                            
                        </div>
                        <h6>Description:{plot}</h6>
                    </div>
                    <div className='modal-footer'>
                        <a
                            href='#!'
                            className='modal-close waves-effect waves-green btn-flat'
                            onClick={() => setModalActive(false)}
                        >
                            Close
                        </a>
                    </div>
                </div>
            </Modal>

            <div
                id={id}
                className='card movie'
                onClick={() => setModalActive(true)}
            >
                <div className='card-image waves-effect waves-block waves-light'>
                    {poster === 'N/A' ? (
                        <img
                            className='activator'
                            src={`https://via.placeholder.com/300x450?text=${title}`}
                            alt='pic'
                        />
                    ) : (
                        <img className='activator' src={poster} alt='pic' />
                    )}
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                        {title}
                    </span>
                    <p>
                        {year} <span className='right'>{type}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export { Movie };
