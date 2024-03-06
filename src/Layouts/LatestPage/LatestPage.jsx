import './LatestPage.scss'
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { animeSeasonThunk } from '../../redux/thunk/get.animeSeason.thunk'
import spinner from '../../assets/spinner.svg'
import ErrorContent from '../../Components/ErrorContent/ErrorContent'
import Button from '../../Components/Button/Button'
import arrowIcon from "../../assets/icons/arrowr-icon.svg"
import episodesIcon from "../../assets/icons/episodes-icon.svg"
import heartIcon from "../../assets/icons/heart-icon.svg"
import { useNavigate } from "react-router-dom"
import { APP_ROUTES } from '../../constants/routes.constants'
import { dateForCurrentSeason } from "../../utils/currentSeason";

function LatestPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useSelector((state) => state.animeSlice);

    useEffect(() => {
        dispatch(animeSeasonThunk())
    }, [])



    // Redirection Read More
    const handleReadMoreClick = (animeID) => {
        navigate(`${APP_ROUTES.ANIME_DETAILS}/${animeID}`);
    }

    // Redirection Genre
    const handleGenreClick = (genre) => {
        navigate(`${APP_ROUTES.GENRE}/${genre}`);
    }

    // HandleRefresh
    const handleRefresh = () => {
        window.location.reload();

    }


    // Load more Animes
    const handleLoadMore = (e) => {

        e.preventDefault();

        if (data.pagination && data.pagination.has_next_page) {
            const nextPage = data.pagination.current_page + 1;
            dispatch(animeSeasonThunk(nextPage));
        }
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome the latest anime page - Umaki.TV </title>
                    <meta name='description' content='Welcome, discover latest animes for the current season !' />
                </Helmet>
            </HelmetProvider>


            <Header />



            {/*  Loading content */}
            {loading && (
                <img src={spinner} alt="Loading..." className="loader" />
            )}

            {error ? (
                <>
                    <ErrorContent type='error' />
                    <Button text='Try again'
                        onClick={() => handleRefresh()} />
                </>
            ) : (
                <section className="latest-animes">

                    <h1>The latest Anime for {data.dateString}</h1>

                    <div className="latest-animes__wrapper">
                        {data.animeDetail?.length > 0 && (
                            data.animeDetail.map((d) => (
                                <article key={d.mal_id}>

                                    <div className="wrapper__card__animeImg">
                                        <img loading="lazy" src={d.image} alt={`${d.title} image`} />
                                    </div>
                                    <div className='wrapper__card__animeInfo'>
                                        <h1>{d.title}</h1>
                                        <div className="wrapper__card__animeInfo__tags">

                                            {d.genres.map((genre, index) => (
                                                <span
                                                    key={`${genre.mal_id}-${index}`}
                                                    onClick={() => handleGenreClick(genre.name)}
                                                >{genre.name}</span>
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
                        )}
                    </div>


                    <Button
                        text='Load More Animes'
                        onClick={(e) => handleLoadMore(e)} />


                </section>
            )}



            <Footer />
        </>
    )
}
export default LatestPage