import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchAnimeThunk } from "../../redux/thunk/get.searchAnime.thunk"
import spinner from '../../assets/spinner.svg'
import arrowIcon from "../../assets/icons/arrowr-icon.svg"
import episodesIcon from "../../assets/icons/episodes-icon.svg"
import heartIcon from "../../assets/icons/heart-icon.svg"
import ErrorContent from "../../Components/ErrorContent/ErrorContent"
import { formatNumber } from "../../utils/formatNumber"
import './SearchPage.scss'
import { APP_ROUTES } from "../../constants/routes.constants";
import Button from "../../Components/Button/Button"
import { useState } from "react"


function SearchPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { query } = useParams();
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);


    useEffect(() => {


        dispatch(searchAnimeThunk(query))
        console.log('anime', query)


    }, [query])

    const { data, loading } = useSelector((state) => state.animeSlice);



    // Redirection Read More
    const handleReadMoreClick = (animeID) => {

        navigate(`${APP_ROUTES.ANIME_DETAILS}/${animeID}`);

    }


    // Redirection Genre
    const handleGenreClick = (genre) => {
        navigate(`${APP_ROUTES.GENRE}/${genre}`);
    }



    // Load more Animes
    const handleLoadMore = (e) => {

        e.preventDefault();

        if (data.pagination && data.pagination.has_next_page) {
            const nextPage = data.pagination.current_page + 1;
            console.log(nextPage);
            // Dispatchez une action pour charger la prochaine page d'animes
            dispatch(topanimeThunk(nextPage));
        }
    }



    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }
    return (
        <>

            <HelmetProvider>
                <Helmet>

                    <title>Are you Looking for something special ? Umaki.TV </title>
                    <meta name='description' content='Maybe you already have a title in your mind ? Please use the Search Bar' />
                </Helmet>

            </HelmetProvider>

            <Header />

            {/* BODY */}

            <section className="search-results-page">
                <h1>Your research : {query} </h1>


                <div className="wrapper">
                    {data.data?.length > 0 ? (
                        data.data.map((d) => (



                            <article key={d.mal_id} className="wrapper__card">
                                <div className="wrapper__card__animeImg">
                                    <img loading="lazy" src={d.images.webp.large_image_url} alt="" />
                                </div>
                                <div className="wrapper__card__animeInfo">
                                    <h1>{d.title}</h1>
                                    <div className="wrapper__card__animeInfo__tags">
                                        {d.genres.map((genre) => (
                                            <span
                                                onClick={() => handleGenreClick(genre.name)}
                                                key={genre.mal_id}>{genre.name}</span>
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
                                        onClick={() => handleReadMoreClick(d.mal_id)}
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
                                        dispatch(topanimeThunk())
                                        setIsButtonEnabled(false);


                                    }}
                                    disabled={!isButtonEnabled}
                                    text="Please, try again" />
                            </div>
                        </>
                    )}

                </div>

            </section>

            <Footer />


        </>
    )
}
export default SearchPage