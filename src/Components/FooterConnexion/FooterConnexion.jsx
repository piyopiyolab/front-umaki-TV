import "./FooterConnexion.scss"
import komodo from "../../assets/komodo-demon-slayer.svg"

function FooterConnexion() {
    return (
        <>

            <div className="footer__connexion">
                <h2 className="text-center">Umaki.<span>TV</span></h2>
                <p>Umaki.TV is a web application that helps you keep track of your progress in watching anime or reading manga. Stay organised, never miss an episode and discover new series to enjoy.

                </p>
                <div className="footer__connexion__wrapper">
                    <div className="footer__connexion__wrapper__bar"></div>
                    <div className="footer__connexion__wrapper__bar"></div>
                    <div className="footer__connexion__wrapper__bar"></div>
                </div>

            </div>

        </>
    )
}
export default FooterConnexion