import './Footer.scss'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import githubIcon from '../../assets/icons/square-github.svg'
import favicon from "/images/favicon-32x32.png"


function Footer() {
    return (
        <footer className='footer text-center'>
            <img src={favicon} alt="favicon umaki.TV" />
            <p>Umaki.<span>TV</span></p>
            <p>your online library 100% anime</p>

            <div className='footer__socials'>
                <a href="https://github.com/piyopiyolab">
                    <img src={githubIcon} alt="github Marion Piouceau " />
                </a>               <a href="https://www.linkedin.com/in/marionpiouceau/">
                    <img src={linkedinIcon} alt="linkedin Marion Piouceau " />
                </a>

            </div>

            <p>©Marion Piouceau 2023 All Rights Reserved. </p>
            <p>Credits Design : <a href="https://www.figma.com/@walmirdecastro">@walmirdecastro</a> <a href="https://www.figma.com/@saishadlak">@saishadlak</a></p>
        </footer>
    )
}
export default Footer