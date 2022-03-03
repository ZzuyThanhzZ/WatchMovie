import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
//Image
import searchIcon from '../../images/search-icon.svg';
//styles
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true)

    useEffect(() => {
        if(initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                    <Link to={`/search`}>
                        <img src={searchIcon} alt='search-icon' />
                    </Link>
                    <input
                        value={state}
                        type="text"
                        placeholder="Search Movie..."
                        onChange={e => setState(e.currentTarget.value)}
                    />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;