import Input from '../Input/Input';
import './SearchBar.scss';
import searchIcon from '../../assets/icons/search-icon.svg'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { APP_ROUTES } from '../../constants/routes.constants';
import { useNavigate } from 'react-router-dom';




function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const navigate = useNavigate();

    const handleClickSearch = (anime) => {
        const formatedAnime = anime.replace(/\s+/g, '-');
        navigate(`${APP_ROUTES.SEARCH}/${formatedAnime}`);

    }

    // Key down Listener
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('enter pressed')
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>



            <div className="searchbar__content">
                <Input
                    onKeyDown={() => handleClickSearch(searchValue)}
                    role="search"
                    type='search'
                    value={searchValue}
                    autoComplete='off'
                    onChange={handleChange}

                />
                <img
                    onClick={() => handleClickSearch(searchValue)}
                    src={searchIcon} alt="search icon" />

            </div>
        </>
    )
}
export default SearchBar