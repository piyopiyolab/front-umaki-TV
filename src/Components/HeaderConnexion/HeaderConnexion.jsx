import "./HeaderConnexion.scss"
import logo from "../../assets/umaki.tv-logo.svg"
import nekomask from "../../assets/nekomask.svg"
import komodo from "../../assets/komodo-demon-slayer.svg"

function HeaderConnexion() {
    return (
        <>
            <div className="header__container">
                <div className="header__container__logo">
                    <a href="/">
                        <img src={logo} className="header__container__logo" alt="logo" />
                    </a>

                </div>

                <div className="header__container__greetings">
                    <img src={nekomask} alt="nekomask" />
                    <div className="header__container__greetings__text">
                        <h1><span>ようこそ !</span>  <span>Welcome !</span></h1>
                    </div>
                </div>

            </div>


        </>
    )
}
export default HeaderConnexion