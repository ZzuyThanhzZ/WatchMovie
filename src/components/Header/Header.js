import {useContext, useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
//Styles
import {Wrapper, Content, LogoImg, SearchImg} from './Header.styles';
//Images
import RMDBLogo from '../../images/react-movie-logo.svg';
import searchIcon from '../../images/search-icon.svg';
//Context
import {Context, initialState} from '../../context';


const Header = () => {

    const elementRef = useRef();
    const wrapperRef = useRef()

    const [showModal, setShowModal] = useState(false);
    const [logout, setLogout] = useState(false);
    
    const [user, setUser] = useContext(Context);

    let lastScrollTop = 0;
    
    const handleScroll = () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop){
            wrapperRef.current.style.transform = 'translateY(-76px)';
        } else {
            wrapperRef.current.style.transform = 'translateY(0)';
            if(st === 0) {
                wrapperRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            } else {
                wrapperRef.current.style.backgroundColor = 'var(--darkGrey)';
            } 

        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false);
    }, [lastScrollTop])
    

    const handleClick = () => {
        if(showModal === false) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

    const handleLogout = () => {
        setLogout(true);
        setUser(initialState);
        setShowModal(false);
        alert('You have been signed out successfully.');
    }

    const handleChange = () => {
        setLogout(false);
    }

    const useOutsideClick = () => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (elementRef.current && !elementRef.current.contains(event.target)) {
                    setShowModal(false);
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
    }

    useOutsideClick()
    
    return (
        <Wrapper ref={wrapperRef}>
            <Content>
                <Link to="/">
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                <div className="container">
                    <div>
                        {user.name !== '' && !logout ? (
                            <div className="login" onClick={handleClick} ref={elementRef}>
                                <div className="user">
                                    <span>{user.username || user.name}</span>
                                    <img alt="avatar" src={user.imageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbGozsS9QP10p16rZiCrQD0koXVkI4c7LwUHab9dkmFRcN0VqCkB37f2y0EnySItwykg&usqp=CAU'} />
                                </div>
                                {showModal ? 
                                    <div className="logout">
                                        <Link to="/watchlist">
                                            <i className="fa-solid fa-list"></i>
                                            My list
                                        </Link>
                                        <a href="#" onClick={handleLogout}>
                                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                            Log out
                                        </a>
                                    </div> : null}
                            </div>
                        ) : (
                            <Link onClick={handleChange} to="/login" className="login">
                                <i className="fa-solid fa-user"></i>
                                <span>Log in</span>
                            </Link>
                        )}
                    </div>
                    <Link to='/search'>
                        <SearchImg src={searchIcon} alt='search-icon' />
                    </Link>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Header;