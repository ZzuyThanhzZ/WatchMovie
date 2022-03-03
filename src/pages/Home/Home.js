
//Components
import HeroImage from '../../components/HeroImage/HeroImage';
import Grid from '../../components/Grid/Grid';
import Thumb from '../../components/Thumb/Thumb';
import Spinner from '../../components/Spinner/Spinner';
import LoadBtn from '../../components/LoadBtn/LoadBtn';
import Skeleton from '../../components/Skeleton/Skeleton';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Error from '../../components/Error/Error';
//Hooks
import {useHomeFetch} from '../../hooks/useHomeFetch';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
//Image
import NoImage from '../../images/no_image.jpg';
//Styles
import {Wrapper} from './Home.styles';


const Home = ({handleScrollTop}) => {

    const { state, loading, error, searchTerm, setIsLoadingMore } = useHomeFetch();
    console.log(state);

    const randomNum = Math.floor(Math.random() * 20);

    if(error) return <Error />
    
    return (
        <Wrapper>
            {loading && <Skeleton />}
            {!searchTerm && state.results[randomNum] ? (
                <HeroImage 
                movieId={state.results[randomNum].id}
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomNum].backdrop_path}`}
                title={state.results[randomNum].title}
                text={state.results[randomNum].overview}
                />
                ) : null}
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                        }
                        movieId={movie.id}
                        movieTitle={movie.title}
                    />
                    ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <LoadBtn text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
            {<ScrollTop handleScrollTop={handleScrollTop}/>}
        </Wrapper>
    )
}

export default Home;