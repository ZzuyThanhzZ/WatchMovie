
import {Wrapper, Content} from './ScrollTop.styles';

const ScrollTop = ({handleScrollTop}) => {
        return (
            <Wrapper onClick={handleScrollTop}>
                <Content>
                    <i className="fa-solid fa-angles-up"></i>
                </Content>
            </Wrapper>
        )
}

export default ScrollTop;