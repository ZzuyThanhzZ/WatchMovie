import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
//Styles
import {Wrapper, Content} from './MovieWatch.styles';
//Components
import Skeleton from '../../components/Skeleton/Skeleton';
import MovieVideo from '../../components/MovieVideo/MovieVideo';
import RecommendMovie from '../../components/RecommendMovie/RecommendMovie';
import Error from '../../components/Error/Error';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
//Hooks
import {useMovieFetch} from '../../hooks/useMovieFetch';

const MovieWatch = ({user, addWatchList, setAddWatchList, handleAddList, handleScrollTop}) => {
    const {movieId} = useParams();

    const currentUrl = window.location.href;
    console.log(currentUrl);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [movieId])

    const {state: movie, loading, error} = useMovieFetch(movieId);

    if(loading) return <Skeleton />
    if(error) return <Error />
    
    return (
        <Wrapper>
            <Content>
                <MovieVideo 
                    user={user} 
                    movie={movie} 
                    addWatchList={addWatchList} 
                    setAddWatchList={setAddWatchList} 
                    handleAddList={handleAddList}
                />
            </Content>
            <div class="fb-comments" data-href={currentUrl} data-width="100%" data-numposts="5"></div>
            {(movie.similarMovie && movie.recommendMovie) 
                ? <RecommendMovie similarMovie={movie.similarMovie} recommendMovie={movie.recommendMovie} />
                : <div>Hello</div>}
            <ScrollTop handleScrollTop={handleScrollTop}/>
        </Wrapper>
    )
}

export default MovieWatch;