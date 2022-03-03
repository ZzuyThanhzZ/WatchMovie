import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
//hooks
import { useMovieFetch } from '../../hooks/useMovieFetch';
//components
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import MovieDesc from '../../components/MovieDesc/MovieDesc';
import MovieInfoBar from '../../components/MovieInfoBar/MovieInfoBar';
import Actor from '../../components/Actor/Actor';
import Grid from '../../components/Grid/Grid';
import Skeleton from '../../components/Skeleton/Skeleton';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Error from '../../components/Error/Error';
//Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
//Image
import NoImage from '../../images/no_image.jpg';
//Styles
import {Wrapper} from './MovieInfo.styles';

const MovieInfo = ({user, addWatchList, setAddWatchList, handleAddList, handleScrollTop}) => {
    const {movieId} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if(loading) return <Skeleton />
    if(error) return <Error />

    return (
        <Wrapper>
            <BreadCrumb 
                movieTitle={
                    movie.title !== movie.original_title 
                        ? `${movie.title} (${movie.original_title})`
                        : `${movie.title}`
                }
            />
            <MovieDesc movie={movie} user={user} addWatchList={addWatchList} setAddWatchList={setAddWatchList} handleAddList={handleAddList}/>
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
            <Grid header='Actors'>
                {movie.actors.map(actor => {
                    return (
                        <Actor 
                            key={actor.credit_id}
                            name={actor.name}
                            character={actor.character}
                            imageUrl={
                                actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
                            }
                        />
                    )
                })}
            </Grid>

            {<ScrollTop handleScrollTop={handleScrollTop}/>}
        </Wrapper>
    )
}

export default MovieInfo;