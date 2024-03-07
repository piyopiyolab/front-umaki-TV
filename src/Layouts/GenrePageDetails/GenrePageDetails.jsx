import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './GenrePageDetails.scss';
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom';



function GenrePageDetails() {

    const genre = useParams();


    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Discover Animes - Umaki.TV </title>
                    <meta name='description' content='Welcome to Umaki.TV, discover animes and find your next serie!' />
                </Helmet>
            </HelmetProvider>

            <Header />
            <section className="genre__body">

                <h1 className='text-center'>Choose your favorite <span>{genre.genre} </span>anime !</h1>

                <div className='genre__body__wrapper'>



                </div>

            </section>
            <Footer />

        </>
    )
}
export default GenrePageDetails