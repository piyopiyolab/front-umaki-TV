import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from "../Components/Header/Header"
import BodyHome from "../Components/BodyHome/BodyHome"


function HomePage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome to HomePage- Umaki.TV </title>
                    <meta name='description' content='Welcome to Umaki.TV, start by creating your account or log-in to start tracking your viewing progress !' />
                </Helmet>
            </HelmetProvider>
            <Header />
            <BodyHome />
        </>
    )
}
export default HomePage