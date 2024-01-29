import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from "../Components/Header/Header"
import Card from "../Components/Card/Card"
import "./HomePage.scss"


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

            <body className="body">
                <h2 className="body__title2">Trending last days ...</h2>
                <Card />
            </body>
        </>
    )
}
export default HomePage