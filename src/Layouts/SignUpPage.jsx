import FooterConnexion from "../Components/FooterConnexion/FooterConnexion"
import HeaderConnexion from "../Components/HeaderConnexion/HeaderConnexion"
import SignUp from "../Components/SignUp/SignUp"

import { Helmet, HelmetProvider } from 'react-helmet-async';


function SignUpPage() {
    return (

        <>


            <HelmetProvider>
                <Helmet>
                    <title>Sign-up Page- Umaki.TV </title>
                    <meta name='description' content='Welcome to Umaki.TV, create your account to start tracking your viewing progress !' />
                </Helmet>
                <HeaderConnexion />
                <SignUp />

                <FooterConnexion />

            </HelmetProvider>


        </>
    )
}
export default SignUpPage