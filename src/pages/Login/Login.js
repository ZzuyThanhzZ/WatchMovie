import React, {useState, useContext, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
//API
import API from '../../API';
//styles
import {Wrapper, Content} from './Login.styles';
//Context
import {Context} from '../../context';
//components
import LoginGG from '../../components/LoginGG/LoginGG';
//Helpers
import { isPersistedUser} from '../../helpers';


const Login = () => {

    const btnRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);

    const navigate = useNavigate();

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === 'username') setUsername(value);
        if(name === 'password') setPassword(value);
    }

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password,
            );

            const localUser = isPersistedUser(`${username}`);
            if(localUser) {
                setUser(localUser)
            } else {
                setUser({ sessionId: sessionId.session_id, name: username, movieAdded: [] });
            }

            navigate('/')

        } catch(err) {
            setError(true);
        }
    }

    return (
        <Wrapper>
            <Content>
                <h2>Sign in</h2>
                <input type='text' placeholder='Username' value={username} name='username' onChange={handleInput}/>
                <input 
                    type='password' 
                    placeholder='Password' 
                    value={password} 
                    name='password' 
                    onChange={handleInput}
                    onKeyUp={e => {
                        if (e.keyCode === 13) {
                            e.preventDefault();
                            btnRef.current.click();
                        }
                    }}
                />
                {error && <div className="error">There was an error!</div>}
                <button 
                    type='button' 
                    onClick={handleSubmit} 
                    ref={btnRef}
                >
                    LOGIN
                </button>
                <h3>Or login with</h3>
                <div className="login-brand">
                    <div className="g-signin">
                        <LoginGG className="google" setUser={setUser}/>
                    </div>
                </div>
                <div className="signup">
                    <span>Don't have account? </span>
                    <a href="https://www.themoviedb.org/signup?language=vi">Sign up with TMDB</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Login;