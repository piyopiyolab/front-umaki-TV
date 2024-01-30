import "./Header.scss"
import logo from '../../assets/umaki.tv-logo.svg'
import heartIcon from '../../assets/icons/heart-icon.svg'
import genreIcon from '../../assets/icons/genre-icon.svg'
import homeIcon from '../../assets/icons/home-icon.svg'
import flammeIcon from '../../assets/icons/flame-icon.svg'
import hamburger from '../../assets/icons/hamburger-solid.svg'
import close from '../../assets/icons/close.svg'

import { useState } from "react"

function Header() {

    const [showMobileNav, setShowMobileNav] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(true)

    const handleShowMobileNav = () => {
        console.log('show/hide menumobile')
        setMobileMenu(!mobileMenu);
    };



    return (
        <>
            <nav className="header__nav">
                <div className="header__nav__logoContainer">
                    <img src={logo} className='logo' alt="logo umaki.TV" />
                </div>
                <div className="header__nav__menu">
                    {/* icon mobile menu */}


                    {
                        !mobileMenu ? (
                            <img
                                onClick={handleShowMobileNav}
                                src={hamburger}
                                alt="icon mobile"
                                className="icon header__nav__menu__icon-open"
                            />
                        ) : (
                            <img
                                onClick={handleShowMobileNav}
                                src={close}
                                alt="icon close mobile"
                                className="icon header__nav__menu__icon-close"
                            />
                        )
                    }




                    <ul className={mobileMenu ? "" : "hidden"}>
                        <li>
                            <a href="/">
                                <img src={homeIcon} className="icon" alt="icon home" />
                                <span className="active">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/favorite">
                                <img src={heartIcon} className="icon" alt="favorite icon" />
                                <span>Favorite</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={genreIcon} className="icon" alt="Genre icon" />
                                <span>Genre</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={flammeIcon} className="icon" alt="latest icon" />

                                <span>Latest</span></a>
                        </li>
                    </ul>



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