import {useEffect} from 'react';
import {Link} from 'react-router-dom';
//styles
import {Wrapper, Content, Text} from './MovieVideo.styles';
//API
import API from '../../API';

const MovieVideo = ({movie, user, addWatchList, setAddWatchList, handleAddList}) => {

    useEffect(() => {
        if(user.movieAdded.find(el => el.id === movie.id)) {
            setAddWatchList(true);
        } else {
            setAddWatchList(false);
        }
    }, [setAddWatchList, user.movieAdded, movie.id])

    return (
        <Wrapper>
            <Content>
                <div className="navigate">
                    <Link to='/'>Home </Link>
                    <Link to='/search'>/ Movie </Link>
                    <Link to={`/movie/${movie.id}`}>/ {movie.title} </Link>
                    <Link to={`/movie/${movie.id}/watch`}>/ Watch </Link>
                </div>
                <iframe
                    src={API.getMovieById(movie.id)}
                    title="movie"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <Text>
                    <h1>{movie.title}</h1>

                    {user.name !== '' && <span className="add-watchlist">
                          {addWatchList && user.movieAdded.find(el => el.id === movie.id) 
                            ?   <span>
                                    Added to your Watchlist:
                                    <i style={{color: '#fcd53f'}} onClick={() => handleAddList(movie)} className="fa-solid fa-bookmark"></i>
                                </span>
                            :   <span>
                                    Add to your Watchlist:
                                    <i onClick={() => handleAddList(movie)} className="fa-regular fa-bookmark"></i>
                                </span>}
                    </span>}

                    <div className="category">
                        {movie.genres.map(cate => (
                            <li key={cate.id}>{cate.name}</li>
                        ))}
                    </div>

                    <p>{movie.overview}</p>

                    <p>Release Data: {movie.release_date}</p>

                    <div className="rating-directors">
                        <div>
                            <span>RATING: </span>
                            <span className="score">⭐ {movie.vote_average} </span>
                        </div>

                        <div className="director">
                            <span>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}: </span>
                            {movie.directors.map(director => (
                                <span key={director.credit_id}>{director.name}</span>
                            ))}
                        </div>
                    </div>
                    
                </Text>
            </Content>
        </Wrapper>
    )
}

export default MovieVideo