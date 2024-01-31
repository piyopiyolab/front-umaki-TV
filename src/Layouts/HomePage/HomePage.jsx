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
                <section>
                    <h2>On Going</h2>
                    {data?.length > 0 ? (
                        <div>
                            {data.map((id) => (
                                // Afficher uniquement si id.anime_state est "on_going"
                                id.anime_state === "watched" && (
                                    <div key={id.anime_id}>
                                        <img src={id.media} alt={id.title} />
                                        <span>{id.title}</span>
                                        <span>{id.anime_state}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    ) : (
                        <p>No data, please add animes</p>
                    )}
                </section>
                {data?.length > 0 ? (



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
                ) : (
                    <p>No data, please try again</p>
                )}


            </section>

            <Footer />
        </>
    )
}
export default HomePage