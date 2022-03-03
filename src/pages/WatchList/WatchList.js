import {Link} from 'react-router-dom';
//styles
import {Wrapper, Content} from './WatchList.styles';
//config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';


const WatchList = ({user, setUser}) => {

    console.log(user);
    
    const handleRemove = (movie) => {
        setUser(prevUser => ({
            ...prevUser,
            movieAdded: prevUser.movieAdded.filter(mov => mov.id !== movie.id),
        }));
    }

    return (
        <Wrapper>
            <Content>
                <h1>My List</h1>
                {user.movieAdded.map(movie => {
                    return (
                        <div key={movie.id} className="movie-container">
                            <div className="thumb">
                                <img alt="movie-thumb" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} />
                            </div>
                            <div className="description">
                                <h3>{movie.title}</h3>
                                <span className="movie-overview">{movie.overview}</span>
                                <p>Rating: {movie.vote_average} ({movie.vote_count} votes)</p>
                                <div className="btn">
                                    <Link 
                                        to={`/movie/${movie.id}/watch`} 
                                        className="btn-play"
                                    >
                                        <i className="fa-solid fa-play"></i>
                                        <span>Play</span>
                                    </Link>
                                    <Link to={`/movie/${movie.id}`} className="btn-detail">
                                        <div><i className="fa-solid fa-circle-info"></i></div>
                                        <span>Detail</span>
                                    </Link>
                                    <a href="#" onClick={() => handleRemove(movie)} className="btn-remove">
                                        <div><i className="fa-solid fa-trash-can"></i></div>
                                        <span>Remove</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Content>
        </Wrapper>
    )
}

export default WatchList;