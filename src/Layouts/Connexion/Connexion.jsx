import LogIn from "../../Components/LogIn/LogIn"
import logo from "../../assets/umaki.tv-logo.svg"
import nekomask from "../../assets/nekomask.svg"
import komodo from "../../assets/komodo-demon-slayer.svg"
import './Connexion.scss'
import SignUp from "../../Components/SignUp/SignUp"



function Connexion() {



    return (
        <>
            <div className="flex">


                <div className="connexion">
                    <img src={logo} className="connexion__logo" alt="logo" />
                    <div className="connexion__wrapper__greetings">
                        <img src={nekomask} alt="nekomask" />
                        <div className="connexion__wrapper__greetings__text">
                            <h1><span>ようこそ!</span>  <span>Welcome !</span></h1>
                        </div>
                    </div>


                    <LogIn />
                    <SignUp />


                    <div className="connexion__footer">
                        <h2>Umaki.<span>TV</span></h2>
                        <p>Umaki.TV is a web application that helps you keep track of your progress in watching anime or reading manga. Stay organised, never miss an episode and discover new series to enjoy.

                        </p>
                        <div className="connexion__footer__wrapper">
                            <div className="connexion__footer__wrapper__bar"></div>
                            <div className="connexion__footer__wrapper__bar"></div>
                            <div className="connexion__footer__wrapper__bar"></div>
                        </div>
                    </div>


                </div>

                <div className="desktop">
                    <img src={komodo} alt="Demon Slayer Umaki.TV" />
                    <div className="desktop__footer__wrapper">
                        <div className="desktop__footer__wrapper__bar"></div>
                        <div className="desktop__footer__wrapper__bar"></div>
                        <div className="desktop__footer__wrapper__bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Connexion