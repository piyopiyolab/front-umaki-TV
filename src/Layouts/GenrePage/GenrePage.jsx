import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes.constants';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './GenrePage.scss';

function GenrePage() {
    const [genreData, setGenreData] = useState(null);
    const navigate = useNavigate();

    // Check if body has lightmode class'
    const isLightMode = document.body.classList.contains('lightmode');

    // API Genre
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.jikan.moe/v4/genres/anime');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setGenreData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGenres();
    }, []);

    // Redirection Genre
    const handleGenreClick = (genreId, genreName) => {
        const formatedGenreName = genreName.replace(/\s+/g, '-');
        navigate(`${APP_ROUTES.GENRE}/${genreId}/${formatedGenreName}`);
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Discover Animes - Umaki.TV</title>
                    <meta name="description" content="Welcome to Umaki.TV, discover animes and find your next series!" />
                </Helmet>
            </HelmetProvider>
            <Header />
            <section className={`genre__body ${isLightMode ? 'lightmode' : ''}`}>
                <h1 className="text-center">Exploring Anime Genres</h1>
                <h2>Discover the Diversity of Japanese Animation</h2>
                <div className="genre__body__wrapper">
                    {genreData &&
                        genreData.map((g, index) => (
                            <article
                                key={index}
                                className="genre__item"
                                onClick={() => handleGenreClick(g.mal_id, g.name)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleGenreClick(g.mal_id, g.name);
                                }}
                                tabIndex={0}
                                role="button"
                            >
                                <h3>{g.name}</h3>
                            </article>
                        ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default GenrePage;
