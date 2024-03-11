import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { topanimeThunk } from "../../redux/thunk/get.topanime.thunk";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import ErrorContent from "../../Components/ErrorContent/ErrorContent";
import Carousel from "../../Components/Slider/Slider";
import { formatNumber } from "../../utils/formatNumber";
import spinner from '../../assets/spinner.svg';
import arrowIcon from "../../assets/icons/arrowr-icon.svg";
import episodesIcon from "../../assets/icons/episodes-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import { APP_ROUTES } from "../../constants/routes.constants";
import "./HomePage.scss";

function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 850;

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        dispatch(topanimeThunk());
    }, []);

    const { data, loading } = useSelector((state) => state.animeSlice);
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);

    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }

    const handleReadMoreClick = (animeID) => {
        navigate(`${APP_ROUTES.ANIME_DETAILS}/${animeID}`);
    };

    const handleGenreClick = (genreID, genreName) => {
        const formatedGenreName = genreName.replace(/\s+/g, '-');
        navigate(`${APP_ROUTES.GENRE}/${genreID}/${formatedGenreName}`);
    };

    const handleLoadMore = (e) => {
        e.preventDefault();
        if (data.pagination && data.pagination.has_next_page) {
            const nextPage = data.pagination.current_page + 1;
            dispatch(topanimeThunk(nextPage));
        }
        window.scrollTo({ top: 5, behavior: 'smooth' });
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome to HomePage- Umaki.TV</title>
                    <meta name='description' content='Welcome to Umaki.TV, start by creating your account or log-in to start tracking your viewing progress!' />
                </Helmet>
            </HelmetProvider>

            <Header />

            <section className="trending-animes">
                <div className="trending-animes__headings">
                    <h1>Trending last days ...</h1>
                    <h2>Check out latest and trending animes today!</h2>
                </div>

                {windowWidth < breakpoint ? '' : <Carousel sliderData={data} onClick={handleReadMoreClick} />}

                <div className="wrapper">
                    {windowWidth < breakpoint && (
                        data?.sliderData?.map((d) => (
                            <article key={d.mal_id} className="wrapper__card">
                                <div className="wrapper__card__animeImg">
                                    <img loading="lazy" src={d.images.webp.large_image_url} alt="" />
                                </div>
                                <div className="wrapper__card__animeInfo">
                                    <h1>{d.title_english}</h1>
                                    <div className="wrapper__card__animeInfo__tags">
                                        {d.genres.map((genre) => (
                                            <span
                                                tabIndex="0"
                                                role="button"
                                                onClick={() => handleGenreClick(genre.mal_id)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleGenreClick(genre.mal_id);
                                                }}
                                                key={genre.mal_id}>
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="wrapper__card__animeInfo__stats">
                                        <div>
                                            <img src={heartIcon} alt="episodes icon" />
                                            <p>{formatNumber(d.favorites)}</p>
                                        </div>
                                        <div>
                                            <img src={episodesIcon} alt="episodes icon" />
                                            <p>{`${d.episodes} episodes`}</p>
                                        </div>
                                    </div>
                                    <a
                                        tabIndex="0"
                                        role="button"
                                        onClick={() => handleReadMoreClick(d.mal_id)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleReadMoreClick(d.mal_id);
                                        }}
                                        className="wrapper__card__btn">
                                        Read More <img src={arrowIcon} alt="read more btn" />
                                    </a>
                                </div>
                            </article>
                        ))
                    )}

                    {data.restData?.length > 0 ? (
                        data.restData.map((d) => (
                            <article key={d.mal_id} className="wrapper__card">
                                <div className="wrapper__card__animeImg">
                                    <img loading="lazy" src={d.images.webp.large_image_url} alt="" />
                                </div>
                                <div className="wrapper__card__animeInfo">
                                    <h3>{d.title_english}</h3>
                                    <div className="wrapper__card__animeInfo__tags">
                                        {d.genres.map((genre) => (
                                            <span
                                                tabIndex="0"
                                                role="button"
                                                onClick={() => handleGenreClick(genre.mal_id, genre.name)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleGenreClick(genre.mal_id, genre.name);
                                                }}
                                                key={genre.mal_id}>
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="wrapper__card__animeInfo__stats">
                                        <div>
                                            <img src={heartIcon} alt="episodes icon" />
                                            <p>{formatNumber(d.favorites)}</p>
                                        </div>
                                        <div>
                                            <img src={episodesIcon} alt="episodes icon" />
                                            <p>{`${d.episodes} episodes`}</p>
                                        </div>
                                    </div>
                                    <a
                                        tabIndex="0"
                                        role="button"
                                        onClick={() => handleReadMoreClick(d.mal_id)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleReadMoreClick(d.mal_id);
                                        }}
                                        className="wrapper__card__btn">
                                        Read More <img src={arrowIcon} alt="read more btn" />
                                    </a>
                                </div>
                            </article>
                        ))
                    ) : (
                        <>
                            <div className="wrapper__errorBtn">
                                <ErrorContent type='error' />
                                <Button
                                    onClick={() => {
                                        setIsButtonEnabled(false);
                                        dispatch(topanimeThunk());
                                        setIsButtonEnabled(false);
                                    }}
                                    disabled={!isButtonEnabled}
                                    text="Please, try again"
                                />
                            </div>
                        </>
                    )}
                </div>

                <Button
                    tabIndex="0"
                    role="button"
                    text='Load More Animes'
                    onClick={(e) => handleLoadMore(e)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleLoadMore(e);
                    }}
                />
            </section>

            <Footer />
        </>
    );
}

export default HomePage;
