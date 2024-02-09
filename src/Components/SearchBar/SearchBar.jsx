import Input from '../Input/Input';
import './SearchBar.scss';
import searchIcon from '../../assets/icons/search-icon.svg'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { APP_ROUTES } from '../../constants/routes.constants';
import { useNavigate } from 'react-router-dom';




function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const navigate = useNavigate();

    const handleClickSearch = (anime) => {

        navigate(`${APP_ROUTES.SEARCH}/${anime}`);

    }


    return (
        <>



            <div className="searchbar__content">
                <Input
                    role="search"
                    type='search'
                    value={searchValue}
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