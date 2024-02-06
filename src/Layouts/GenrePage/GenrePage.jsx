import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './GenrePage.scss';
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';




function GenrePage() {
    const { genre } = useParams();
    const [genreData, setGenreData] = useState(null);





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

                <h1 className='text-center'>Choose your theme !</h1>

                <div className='genre__body__wrapper'>

                    <article><h3>Shonen</h3></article>
                    <article><h3>Shojo</h3></article>
                    <article><h3>Isekai</h3></article>
                    <article><h3>Romance</h3></article>
                    <article><h3>Fantaisy</h3></article>
                    <article><h3>Adventure</h3></article>
                    <article><h3>Action</h3></article>

                </div>

            </section>
            <Footer />

        </>
    )
}
export default GenrePage