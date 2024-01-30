import { HelmetProvider, Helmet } from "react-helmet-async"
import "./HomePage.scss"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { topanimeThunk } from '../../redux/thunk/thunk.topanime.get'
import spinner from '../../assets/spinner.svg'
import arrowIcon from "../../assets/icons/arrowr-icon.svg"
import episodesIcon from "../../assets/icons/episodes-icon.svg"
import heartIcon from "../../assets/icons/heart-icon.svg"


function HomePage() {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(topanimeThunk());


        }, []);

    const { data, loading } = useSelector((state) => state.animeSlice);

    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }

    console.log("isLoading:", loading);
    console.log("topAnimeData:", data);


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

                <div className="wrapper">
                    {data.map((animeID) => (
                        <article key={animeID.mal_id} className="wrapper__card">
                            <div className="wrapper__card__animeImg">
                                <img src={animeID.images.webp.large_image_url} alt="" />
                            </div>
                            <div className="wrapper__card__animeInfo">
                                <h1>{animeID.title_english}</h1>
                                <div className="wrapper__card__animeInfo__tags">
                                    {animeID.genres.map((genreID) => (
                                        // Ajout de la clé ci-dessous
                                        <span key={genreID.id}>{genreID.name}</span>
                                    ))}
                                </div>
                                <div className="wrapper__card__animeInfo__stats">
                                    <p>  <img src={heartIcon} alt="episodes icon" />
                                        {animeID.favorites}</p>
                                    <p>
                                        <img src={episodesIcon} alt="episodes icon" />
                                        {animeID.episodes} episodes
                                    </p>
                                </div>
                                <a href="" className="wrapper__card__btn">
                                    Read More <img src={arrowIcon} alt="read more btn" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>


            </section>

            <Footer />
        </>
    )
}
export default HomePage