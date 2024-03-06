import { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider(props) {

    // console.log(localStorage.getItem(darkMode))
    // if (localStorage.getItem(darkMode)) {
    //     console.log('if')
    //     const darkModeCookie = localStorage.getItem(darkMode)
    //     console.log(darkModeCookie)

    // }

    const [darkMode, setDarkMode] = useState(true)


    const toggleTheme = () => {
        setDarkMode(!darkMode)

    }

    localStorage.setItem('darkMode', darkMode)

    if (!darkMode) {

        document.body.classList.add('lightmode')

    }
    else {
        document.body.classList.remove('lightmode')

    }


    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            {props.children}

        </ThemeContext.Provider>
    )
}