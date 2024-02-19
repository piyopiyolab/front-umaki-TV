import './darkMode.scss';
import moonIcon from '../../assets/icons/moon.svg'
import sunIcon from '../../assets/icons/sun.svg'
import { ThemeContext } from '../../context/ThemeProvider';
import { useContext } from 'react';

function DarkMode() {

    const { darkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <div id="darkmode">


                <span
                    onClick={toggleTheme}
                >Go {darkMode ? "Light" : "Dark"}</span>


                <img src={darkMode ? sunIcon : moonIcon} alt="light mode" />


            </div>

        </>
    )
}
export default DarkMode