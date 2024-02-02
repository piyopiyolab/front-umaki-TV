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
import chibi from "/images/chocked-umaki-anime.png"
import Button from "../../Components/Button/Button"
import { useNavigate } from "react-router-dom"
import { APP_ROUTES } from "../../constants/routes.constants"
import { getAnimeIDThunk } from "../../redux/thunk/thunk.get.animeID"
import { getUserList } from "../../redux/thunk/thunk.get.userList"
import ErrorContent from "../../Components/ErrorContent/ErrorContent"


function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(topanimeThunk());

        }, []);

    const { data, loading } = useSelector((state) => state.animeSlice);

    const [isButtonEnabled, setIsButtonEnabled] = useState(true);

    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }


    //error API
    let errorTxt =
        <div>

            <img src={chibi} alt='chibi error umaki.tv' />
            <p className="text-center">Oops, something went wrong...</p>
            <Button
                onClick={() => {
                    setIsButtonEnabled(false);
                    dispatch(topanimeThunk())

                    setTimeout(() => {
                        setIsButtonEnabled(true);
                    }, 1200);
                }}
                disabled={!isButtonEnabled}
                text="Please, try again" />
        </div>



    // Redirection Read More
    const handleReadMoreClick = (animeID) => {

        navigate(`${APP_ROUTES.ANIME_DETAILS}/${animeID}`);

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
                    <h1 >Trending last days ...</h1>
                    <h2> Check out latest and trending animes today ! </h2>
                </div>

                <div className="wrapper">
                    {data?.length > 0 ? (
                        data.map((d) => (


                            <article key={d.mal_id} className="wrapper__card">
                                <div className="wrapper__card__animeImg">
                                    <img src={d.images.webp.large_image_url} alt="" />
                                </div>
                                <div className="wrapper__card__animeInfo">
                                    <h1>{d.title_english}</h1>
                                    <div className="wrapper__card__animeInfo__tags">
                                        {d.genres.map((genre) => (
                                            // Ajout de la clé ci-dessous
                                            <span key={genre.mal_id}>{genre.name}</span>
                                        ))}
                                    </div>
                                    <div className="wrapper__card__animeInfo__stats">
                                        <div>
                                            <img src={heartIcon} alt="episodes icon" />
                                            <p>{d.favorites}</p>

                                        </div>
                                        <div>
                                            <img src={episodesIcon} alt="episodes icon" />
                                            <p>{`${d.episodes} episodes`}</p>
                                        </div>
                                    </div>
                                    <a
                                        onClick={() => handleReadMoreClick(d.mal_id)}
                                        className="wrapper__card__btn">
                                        Read More <img src={arrowIcon} alt="read more btn" />
                                    </a>
                                </div>
                            </article>


                        ))


                    ) : (
                        <>
                            {errorTxt}

                        </>
                    )}

                </div>
            </section >

            <Footer />
        </>
    )
}
export default HomePage