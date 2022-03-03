import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Wrapper} from './LoginGG.styles';
import {GoogleLogin} from 'react-google-login';
import GoogleButton from 'react-google-button'
//helpers
import {isPersistedUser} from '../../helpers';
//config
import {CLIENT_ID} from '../../config';

const LoginGG = ({setUser}) => {

    const [showLoginButton, setShowLoginButton] = useState(true);

    const navigate = useNavigate();

    const onLoginSuccess = (res) => {
        const localUser = isPersistedUser(`${res.profileObj.name}`);
        if(localUser) {
            setUser(localUser)
        } else {
            setUser({
                ...res.profileObj,
                movieAdded: [],
            });
        }
        setShowLoginButton(false);
        navigate('/')
    }

    const onFailureSuccess = (res) => {
        console.log('Login Failed:', res);
    }

    return (
        <Wrapper>
            {showLoginButton ? 
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Sign in using Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onFailureSuccess}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                      )}
                /> 
                : null
            }
        </Wrapper>
    )
}

export default LoginGG;