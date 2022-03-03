import {Link} from 'react-router-dom';
//Styles
import {Wrapper, Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable, movieTitle}) => (
    <Wrapper>
        {clickable ? (
            <Link to={`/movie/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb' />
        )}
        <span>{movieTitle}</span>
    </Wrapper>
)

export default Thumb;