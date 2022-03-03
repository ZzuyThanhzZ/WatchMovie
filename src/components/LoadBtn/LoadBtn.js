import {Wrapper} from './LoadBtn.styles';

const LoadBtn = ({text, callback}) => {
    return (
        <Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>
    )
}

export default LoadBtn