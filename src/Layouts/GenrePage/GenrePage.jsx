import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './GenrePage.scss';
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { APP_ROUTES } from '../../constants/routes.constants';


function GenrePage() {

    const [genreData, setGenreData] = useState(null);
    const navigate = useNavigate();


    // API Genre
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.jikan.moe/v4/genres/anime');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                // Mettre à jour le state avec les données récupérées
                setGenreData(data.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGenres();
        console.log(genreData)

    }, []);

    // Redirection Genre
    const handleGenreClick = (genre) => {
        navigate(`${APP_ROUTES.GENRE}/${genre}`);
    }
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

                    {genreData && (
                        <>
                            {genreData.map((g, index) => (
                                <article
                                    key={index}
                                    onClick={() => handleGenreClick(g.name)}
                                >

                                    <h3>{g.name}</h3>
                                </article>
                            ))}
                        </>
                    )}

                </div>

            </section>
            <Footer />

        </>
    )
}
export default GenrePage