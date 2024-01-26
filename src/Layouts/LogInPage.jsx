import { HelmetProvider, Helmet } from "react-helmet-async"
import FooterConnexion from "../Components/FooterConnexion/FooterConnexion"
import HeaderConnexion from "../Components/Header/HeaderConnexion"
import LogIn from "../Components/LogIn/LogIn"





function LogInPage() {
    return (
        <>


            <HelmetProvider>
                <Helmet>
                    <title>Log-in Page- Umaki.TV </title>
                    <meta name='description' content='Nice to see you again at Umaki.TV, please Log-in to access to your personal data' />
                </Helmet>
            </HelmetProvider>
            <HeaderConnexion />
            <LogIn />
            <FooterConnexion />
        </>
    )
}
export default LogInPage