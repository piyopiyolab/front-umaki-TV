import { useState, useEffect } from "react"
import "./Header.scss"
import logo from '../../assets/umaki.tv-logo.svg'
import heartIcon from '../../assets/icons/heart-icon.svg'
import genreIcon from '../../assets/icons/genre-icon.svg'
import homeIcon from '../../assets/icons/home-icon.svg'
import flammeIcon from '../../assets/icons/flame-icon.svg'
import hamburger from '../../assets/icons/hamburger-solid.svg'
import close from '../../assets/icons/close.svg'
import { APP_ROUTES } from "../../constants/routes.constants"

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 768;

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
                        <a href={APP_ROUTES.HOME}><img src={logo} className='logo' alt="logo umaki.TV" /></a>
                    </div>

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
                                <a href={APP_ROUTES.HOME}>
                                    <img src={homeIcon} className="icon" alt="icon home" />
                                    <span className="active">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href={APP_ROUTES.FAVORITE}>
                                    <img src={heartIcon} className="icon" alt="favorite icon" />
                                    <span>Favorite</span>
                                </a>
                            </li>
                            <li>
                                <a href={APP_ROUTES.GENRE}>
                                    <img src={genreIcon} className="icon" alt="Genre icon" />
                                    <span>Genre</span>
                                </a>
                            </li>
                            <li>
                                <a href={APP_ROUTES.LATEST}>
                                    <img src={flammeIcon} className="icon" alt="latest icon" />

                                    <span>Latest</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

            ) : (
                //dsktop
                <nav className="header__nav">
                    <div className="header__nav__logoContainer">
                        <a href="/"><img src={logo} className='logo' alt="logo umaki.TV" /></a>
                    </div>
                    <ul className="header__nav__menu">
                        <li>
                            <a href={APP_ROUTES.HOME}>
                                <img src={homeIcon} className="icon" alt="icon home" />
                                <span className="active">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href={APP_ROUTES.FAVORITE}>
                                <img src={heartIcon} className="icon" alt="favorite icon" />
                                <span>Favorite</span>
                            </a>
                        </li>
                        <li>
                            <a href={APP_ROUTES.GENRE}>

                                <img src={genreIcon} className="icon" alt="Genre icon" />
                                <span>Genre</span>
                            </a>
                        </li>
                        <li>
                            <a href={APP_ROUTES.LATEST}>

                                <img src={flammeIcon} className="icon" alt="latest icon" />

                                <span>Latest</span></a>
                        </li>
                    </ul>
                </nav>

            )}
        </header>
    );
};

export default Header;
