import {Link} from 'react-router-dom';
//Styles
import {Wrapper, Content, Text} from './HeroImage.styles';

const HeroImage = ({movieId, image, title, text}) => {
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <Link to={`/movie/${movieId}/watch`}>
                        <i className="fa-solid fa-circle-play"></i>
                        <span> Watch Now</span>
                    </Link>
                    <Link to={`/movie/${movieId}`}>
                        <i className="fa-solid fa-circle-info"></i>
                        <span> View Info </span>
                    </Link>
                </Text>
            </Content>
        </Wrapper>
    )
}

export default HeroImage;