import "./Header.scss"
import hamburger from '../../assets/icons/hamburger.svg'
import close from '../../assets/icons/close.svg'
import logo from '../../assets/umaki.tv-logo.svg'
import heartIcon from '../../assets/icons/heart-icon.svg'
import genreIcon from '../../assets/icons/genre-icon.svg'
import homeIcon from '../../assets/icons/home-icon.svg'
import flammeIcon from '../../assets/icons/flame-icon.svg'
import { useState } from "react"

function Header() {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };


    return (
        <>
            <nav className="header__nav">
                <div className="header__nav__logoContainer">
                    <img src={logo} className='logo' alt="logo umaki.TV" />
                </div>
                <div className="header__nav__menu">
                    <ul>
                        <li className={` ${showNavbar && "active"}`}>
                            <a href="/">
                                <img src={homeIcon} alt="icon home" />
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={heartIcon} alt="favorite icon" />
                                <span>Favorite</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={genreIcon} alt="Genre icon" />
                                <span>Genre</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={flammeIcon} alt="latest icon" />

                                <span>Latest</span></a>
                        </li>
                    </ul>

                    {/* icon mobile menu */}
                </div>
                {/* 
                <button
                    onClick={() => setShowMenu(!showMenu)}>Clic

                </button> */}
            </nav>


        </>
    )
}
export default Header