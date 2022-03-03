import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import {Link} from 'react-router-dom';
//Styles
import {Wrapper, Content, Image} from './RecommendMovie.styles';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';


const RecommendMovie = ({similarMovie, recommendMovie}) => {

    return (
        <Wrapper>
            {similarMovie.results.length !== 0 ?
                <div>
                    <h1>Similar Movies</h1>
                    <Content>
                        <Swiper
                            modules={[Navigation, A11y]}
                            spaceBetween={30}
                            slidesPerView='auto'
                            navigation
                            slidesPerGroupAuto
                            loop
                        >
                            {similarMovie.results.map(movie => (
                                <SwiperSlide className="container" key={movie.id}>
                                    <Link to={`/movie/${movie.id}/watch`}>
                                        <Image src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}/>
                                        <h3>{movie.title}</h3>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Content>
                </div>
                : <div></div>
            }

            {recommendMovie.results.length !== 0 ? 
                <div>
                    <h1>Top choice for you</h1>
                    <Content>
                        <Swiper
                            modules={[Navigation, A11y]}
                            spaceBetween={30}
                            slidesPerView='auto'
                            navigation
                            loop
                            slidesPerGroupAuto
                        >
                            {recommendMovie.results.map(movie => (
                                <SwiperSlide className="container" key={movie.id}>
                                    <Link to={`/movie/${movie.id}/watch`}>
                                        <Image src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}/>
                                        <h3>{movie.title}</h3>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Content>
                </div>
                : <div></div>
            }
        </Wrapper>
    )
}

export default RecommendMovie;