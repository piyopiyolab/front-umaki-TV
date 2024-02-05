import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './GenrePage.scss';
import { HelmetProvider, Helmet } from "react-helmet-async"

function GenrePage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Discover Animes - Umaki.TV </title>
                    <meta name='description' content='Welcome to Umaki.TV, discover animes and find your next serie!' />
                </Helmet>
            </HelmetProvider>

            <Header />
            <Footer />

        </>
    )
}
export default GenrePage