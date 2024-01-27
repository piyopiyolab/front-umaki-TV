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
    const [showMenu, setShowMenu] = useState(false);



    return (
        <>
            <nav className="header__nav">
                <div className="header__nav__logoContainer">
                    <img src={logo} alt="logo umaki.TV" />
                </div>
                <ul className={`${showMenu ? "flex" : "hidden"} header__nav__menu`}>
                    <li className="header__nav__menu__item">
                        <a href="/">
                            <img src={homeIcon} alt="icon home" />
                            Home</a>
                    </li>
                    <li className="header__nav__menu__item">
                        <a href="/">
                            <img src={heartIcon} alt="favorite icon" />
                            Favorite</a>
                    </li>
                    <li className="header__nav__menu__item">
                        <a href="/">
                            <img src={genreIcon} alt="Genre icon" />
                            Genre</a>
                    </li>
                    <li className="header__nav__menu__item">
                        <img src={flammeIcon} alt="latest icon" />

                        <a href="/">Latest</a>
                    </li>
                </ul>

                <button
                    onClick={() => setShowMenu(!showMenu)}>
                    <img

                        src={showMenu ? close : hamburger}
                        title={showMenu ? "hide menu" : "show menu"} alt="icone menu" />
                </button>
            </nav>


        </>
    )
}
export default Header