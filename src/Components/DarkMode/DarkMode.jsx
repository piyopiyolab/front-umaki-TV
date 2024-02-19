import './darkMode.scss';
import moonIcon from '../../assets/icons/moon.svg'
import sunIcon from '../../assets/icons/sun.svg'

function DarkMode() {

    const darkMode = true;

    return (
        <>
            <div id="darkmode">


                <span>Go {darkMode ? "Light" : "Dark"}</span>


                <img src={darkMode ? sunIcon : moonIcon} alt="light mode" />


            </div>

        </>
    )
}
export default DarkMode