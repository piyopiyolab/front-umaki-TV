import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from "../Components/Header/Header"
import Card from "../Components/Card/Card"
import "./HomePage.scss"
import Footer from "../Components/Footer/Footer"


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

            <section className="trending-animes">
                <div className="trending-animes__headings">
                    <h2 >Trending last days ...</h2>
                    <h3> Check out latest and trending animes today ! </h3>
                </div>
                <Card />
            </section>

            <Footer />
        </>
    )
}
export default HomePage