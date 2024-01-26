import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from "../Components/Header/Header"
import BodyHome from "../Components/BodyHome/BodyHome"


function HomePage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Sign-up Page- Umaki.TV </title>
                    <meta name='description' content='Welcome to Umaki.TV, create your account to start tracking your viewing progress !' />
                </Helmet>
            </HelmetProvider>
            <Header />
            <BodyHome />
        </>
    )
}
export default HomePage