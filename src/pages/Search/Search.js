
//Components
import Grid from '../../components/Grid/Grid';
import Thumb from '../../components/Thumb/Thumb';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadBtn from '../../components/LoadBtn/LoadBtn';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Skeleton from '../../components/Skeleton/Skeleton';
import Error from '../../components/Error/Error';
//Hooks
import {useHomeFetch} from '../../hooks/useHomeFetch';
//Config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config';
//Image
import NoImage from '../../images/no_image.jpg';
//Styles
import {Wrapper} from './Search.styles';


const Search = ({handleScrollTop}) => {

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

    if(error) return <Error />
    
    return (
        <Wrapper>
            {loading && <Skeleton />}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? `Search Result: ${searchTerm}` : 'Popular Search'}>
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
            {state.page < state.total_pages && !loading && (
                <LoadBtn text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
            {<ScrollTop handleScrollTop={handleScrollTop}/>}
        </Wrapper>
    )
}

export default Search;