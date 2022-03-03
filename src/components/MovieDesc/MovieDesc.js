import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//Images
import NoImage from '../../images/no_image.jpg';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE, EMBED_TRAILER } from '../../config';
//Styles
import { Wrapper, Content, Text } from './MovieDesc.styles';
//Components
import Thumb from '../Thumb/Thumb';
import Trailer from '../Trailer/Trailer';

const MovieDesc = ({ movie, user, addWatchList, setAddWatchList, handleAddList }) => {

    const [trailerModalOpened, setTrailerModalOpened] = useState(false);
    
    useEffect(() => {
        if(user.movieAdded.find(el => el.id === movie.id)) {
            setAddWatchList(true);
        } else {
            setAddWatchList(false);
        }
    }, [setAddWatchList, user.movieAdded, movie.id])
    
    const movieTrailer = movie.trailer.results;

    const handleClick = (e) => {
        e.preventDefault();
        setTrailerModalOpened(true);
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb 
                    image={
                        movie.poster_path 
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                />
                <Text>
                    <h1>
                        {movie.title}
                    </h1>
                        {user.name !== '' && <h2 className="add-list" onClick={() => handleAddList(movie)}>
                                {addWatchList && user.movieAdded.find(el => el.id === movie.id) 
                                    ? <i style={{color: '#D4AF37'}} className="fa-solid fa-bookmark"></i>
                                    : <i className="fa-regular fa-bookmark"></i>} 
                            </h2>}
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <p>Release Data: {movie.release_date}</p>

                    <div className="category">
                        {movie.genres.map(cate => (
                            <li key={cate.id}>{cate.name}</li>
                        ))}
                    </div>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>

                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>

                    <div className="watchBtn">
                        <a href="#" className="trailer" onClick={e => handleClick(e)}>
                            <i className="fa-brands fa-youtube"></i>
                            <span> Trailer </span>
                        </a>
                        <Link to={`/movie/${movie.id}/watch`}>
                            <i className="fa-solid fa-circle-play"></i>
                            <span> Watch Now</span>
                        </Link>
                    </div>
                </Text>
            </Content>

            {trailerModalOpened 
                && <Trailer 
                        setTrailerModalOpened={setTrailerModalOpened} 
                        movieTrailer={movieTrailer} 
                        embed={EMBED_TRAILER}
                    /> 
            }
            
        </Wrapper>
    )
}

export default MovieDesc;