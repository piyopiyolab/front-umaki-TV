import { useState, useEffect } from "react"
import "./Header.scss"
import logo from '../../assets/umaki.tv-logo.svg'
import logoLight from '/images/logo-umaki-light.png'
import logoDark from '/images/logo-umaki-dark.png'
import heartIcon from '../../assets/icons/heart-icon.svg'
import genreIcon from '../../assets/icons/genre-icon.svg'
import homeIcon from '../../assets/icons/home-icon.svg'
import flammeIcon from '../../assets/icons/flame-icon.svg'
import hamburger from '../../assets/icons/hamburger-solid.svg'
import close from '../../assets/icons/close.svg'
import hamburgerDark from '../../assets/icons/hamburger-solid-dark.svg'
import closeDark from '../../assets/icons/close-dark.svg'

import { APP_ROUTES } from "../../constants/routes.constants"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 850;

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <header>
            {windowWidth < breakpoint ? (

                //Mobile
                <nav className="header__nav">
                    <div className="header__nav__logoContainer">
                        <a href={APP_ROUTES.HOME}><img src={logoLight} className='logo' alt="logo umaki.TV" /></a>
                    </div>
                    <SearchBar
                    />
                    <div>
                        {!showMenu ? (
                            <div
                                onClick={() => setShowMenu(!showMenu)}
                                className="header__nav__icon">
                                <img src={hamburger} alt="icon hamburger mobile" />
                            </div>
                        ) :
                            (
                                <div
                                    onClick={() => setShowMenu(!showMenu)}
                                    className="header__nav__icon">
                                    <img src={close} alt="icon close mobile" />
                                </div>
                            )}
                        <ul className={`header__nav__menu ${showMenu ? 'block' : 'hidden'}`}>
                            <li>
                                <NavLink to={APP_ROUTES.HOME} end>
                                    <img src={homeIcon} className="icon" alt="icon home" />
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={APP_ROUTES.FAVORITE} end>
                                    <img src={heartIcon} className="icon" alt="favorite icon" />
                                    <span>Favorite</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={APP_ROUTES.GENRE} end>
                                    <img src={genreIcon} className="icon" alt="Genre icon" />
                                    <span>Genre</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={APP_ROUTES.LATEST} end>
                                    <img src={flammeIcon} className="icon" alt="latest icon" />
                                    <span>Latest</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            ) : (
                //dsktop
                <nav className="header__nav">
                    <div className="header__nav__logoContainer">
                        <a href="/"><img src={logoLight} className='logo' alt="logo umaki.TV" /></a>
                    </div>

                    <SearchBar
                    />
                    <ul className="header__nav__menu">
                        <li>
                            <NavLink to={APP_ROUTES.HOME} end>
                                <img src={homeIcon} className="icon" alt="icon home" />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={APP_ROUTES.FAVORITE} end>
                                <img src={heartIcon} className="icon" alt="favorite icon" />
                                <span>Favorite</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={APP_ROUTES.GENRE} end>
                                <img src={genreIcon} className="icon" alt="Genre icon" />
                                <span>Genre</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={APP_ROUTES.LATEST} end>
                                <img src={flammeIcon} className="icon" alt="latest icon" />
                                <span>Latest</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            )}
        </header>
    );
};

export default Header;
