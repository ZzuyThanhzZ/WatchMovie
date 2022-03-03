import {Link} from 'react-router-dom';
import {Wrapper, Content, Image} from './SimilarMovie.styles';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';

const SimilarMovie = ({similarMovie}) => {

    return (
        <Wrapper>
            <Content>
                <h2>Similar Movie</h2>
                {similarMovie.results.map(movie => (
                    <Link to={`/movie/${movie.id}/watch`} className="container" key={movie.id}>
                        <Image src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}/>
                        <div>
                            <h3>{movie.title}</h3>
                            <span>Score: {movie.vote_average.toFixed(1)} ⭐</span>
                        </div>
                    </Link>
                ))}
            </Content>
        </Wrapper>
    )
}

export default SimilarMovie;