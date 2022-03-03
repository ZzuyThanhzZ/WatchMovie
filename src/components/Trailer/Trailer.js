//Styles
import {Wrapper, Content} from './Trailer.styles';
//Config

const Trailer = ({setTrailerModalOpened, movieTrailer, embed}) => {

    const handleClick = (e) => {
        if(e.target === e.currentTarget) {
            setTrailerModalOpened(false);
        }
    }

    return (
        <Wrapper onClick={e => handleClick(e)}>
            {/* <div className="overlay"></div> */}
            <Content>
                <div className="heading">
                    <h1>Movie Trailer</h1>
                    <i onClick={e => handleClick(e)} className="fa-solid fa-x"></i>
                </div>
                {movieTrailer.map(trailer => (
                    <div className="videos" key={trailer.id}>
                        <h3>{trailer.name}</h3>
                        <iframe
                            src={`${embed}${trailer.key}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </Content>
        </Wrapper>
    )
}

export default Trailer;