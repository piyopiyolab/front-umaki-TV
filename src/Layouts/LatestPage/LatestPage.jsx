import './LatestPage.scss'
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"



function LatestPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome the latest anime page - Umaki.TV </title>
                    <meta name='description' content='Welcome, discover latest animes for the current season !' />
                </Helmet>
            </HelmetProvider>


            <Header />


            <Footer />
        </>
    )
}
export default LatestPage