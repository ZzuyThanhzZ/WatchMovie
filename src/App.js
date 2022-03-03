import {Routes, Route} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
// components
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import MovieInfo from './pages/MovieInfo/MovieInfo';
import MovieWatch from './pages/MovieWatch/MovieWatch';
import WatchList from './pages/WatchList/WatchList';
import Footer from './components/Footer/Footer';
// styles
import {GlobalStyle} from './GlobalStyle.js';
//Context
import {Context, initialState} from './context';
//Helpers
import {isPersistedUser} from './helpers';


function App() {
  
  const [user, setUser] = useContext(Context);
  const [addWatchList, setAddWatchList] = useState(false);

  useEffect(() => {
    if(user.name === '') {
        const localUser = isPersistedUser(`${user.name}`);
        console.log('Lay tu local ne');
        console.log(localUser);

        if(localUser) {
            setUser(localUser);
            return;
        }
    }
    setUser(initialState);
  }, [])

  useEffect(() => {
    localStorage.setItem(`${user.name}`, JSON.stringify(user));
  }, [user])

  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleAddList = (movie) => {
    if(addWatchList) {
        setAddWatchList(false);
        setUser(props => ({
            ...props,
           movieAdded: props.movieAdded.filter(el => el.id !== movie.id),
        }))
    } else {
        setUser(props => {
            if(!props.movieAdded) {
                return {
                    ...props,
                    movieAdded: [movie],
                }
            } else {
                return {
                    ...props,
                    movieAdded: [...props.movieAdded, movie]
                }
            }
        });
        setAddWatchList(true);
        alert(`Added ${movie.title} to your Watchlist!`)
    }
  }

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home handleScrollTop={handleScrollTop}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search handleScrollTop={handleScrollTop}/>} />
          <Route path="/watchlist" element={<WatchList user={user} setUser={setUser} />} />
          <Route 
            path="/movie/:movieId" 
            element={
              <MovieInfo 
                user={user} 
                addWatchList={addWatchList}
                setAddWatchList={setAddWatchList}
                handleAddList={handleAddList} 
                handleScrollTop={handleScrollTop}
              />} 
          />
          <Route 
            path="/movie/:movieId/watch" 
            element={
              <MovieWatch
                user={user} 
                addWatchList={addWatchList}
                setAddWatchList={setAddWatchList}
                handleAddList={handleAddList} 
                handleScrollTop={handleScrollTop}
              />} 
          />
      </Routes>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
