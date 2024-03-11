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

function LatestPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useSelector((state) => state.animeSlice);

    // Check if body has lightmode class'
    const isLightMode = document.body.classList.contains('lightmode');

    useEffect(() => {
        dispatch(animeSeasonThunk())
        console.log('data :', data)
        console.log('loading :', loading, 'error :', error)
    }, [])



    // Redirection Read More
    const handleReadMoreClick = (animeID) => {
        navigate(`${APP_ROUTES.ANIME_DETAILS}/${animeID}`);
    }

    // Redirection Genre
    const handleGenreClick = (genreId, genreName) => {
        navigate(`${APP_ROUTES.GENRE}/${genreId}/${genreName}`);
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
        window.scrollTo({ top: 5, behavior: 'smooth' });

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

            {error & !data ? (
                <>
                    <ErrorContent type='error' />
                    <Button text='Try again'
                        onClick={() => handleRefresh()} />
                </>
            ) : (
                <section className={`latest-animes ${isLightMode ? 'lightmode' : ''}`}>

                    <h1>The latest Anime for {data.dateString}</h1>
                    <h2>Check out simulcasts for the season</h2>

                    <div className="latest-animes__wrapper">
                        {data.animeDetail?.length > 0 && (
                            data.animeDetail.map((d) => (
                                <article key={d.mal_id}>

                                    <div className="wrapper__card__animeImg">
                                        <img loading="lazy" src={d.image} alt={`${d.title} image`} />
                                    </div>
                                    <div className='wrapper__card__animeInfo'>
                                        <h3>{d.title}</h3>
                                        <div className="wrapper__card__animeInfo__tags">

                                            {d.genres.map((genre, index) => (
                                                <span
                                                    key={`${genre.id}-${index}`}
                                                    onClick={() => handleGenreClick(genre.id, genre.name)}
                                                    tabIndex="0"
                                                    role="button"
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') handleGenreClick(genre.id, genre.name);
                                                    }}
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
                                            Read More <img src={arrowIcon} alt="read more btn"
                                                tabIndex="0"
                                                role="button"
                                                onClick={() => handleReadMoreClick(d.mal_id)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleReadMoreClick(d.mal_id);
                                                }} />

                                        </a>



                                    </div>









                                </article>
                            ))
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
            )}



            <Footer />
        </>
    )
}
export default LatestPage