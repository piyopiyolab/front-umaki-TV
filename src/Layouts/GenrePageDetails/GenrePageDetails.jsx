import { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './GenrePageDetails.scss';
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimeGenreThunk } from '../../redux/thunk/get.animeGenre.thunk';
import spinner from '../../assets/spinner.svg'
import arrowIcon from "../../assets/icons/arrowr-icon.svg"
import episodesIcon from "../../assets/icons/episodes-icon.svg"
import heartIcon from "../../assets/icons/heart-icon.svg"
import ErrorContent from '../../Components/ErrorContent/ErrorContent';
import Button from '../../Components/Button/Button';
import { APP_ROUTES } from '../../constants/routes.constants';



function GenrePageDetails() {

    const { genreID } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.animeSlice);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAnimeGenreThunk(genreID))
        console.log(data)
    }, [genreID])

    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }


    //  Handle Redirect home

    const handleRedirectHome = () => {
        navigate(APP_ROUTES.HOME)
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
            console.log(data.pagination, 'page suivante : page ', nextPage)
            dispatch(getAnimeGenreThunk(genreID, nextPage))
        }
    }

    // Redirection Read More
    const handleReadMoreClick = (animeID) => {
        navigate(`${APP_ROUTES.ANIME_DETAILS}/${animeID}`);
    }

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




                {error ? (
                    <>
                        <div className='ErrorContent-wrapper'>
                            <ErrorContent type='error' />

                            <div>

                                <Button
                                    onClick={() => handleRefresh()}
                                    text='Try again' />

                                <Button
                                    onClick={() => handleRedirectHome()}
                                    text='Come back home' />

                            </div>

                        </div>
                    </>

                ) : (
                    <>
                        <h1 className='text-center'>Choose your favorite <span> </span>anime !</h1>
                        <div className='genre__body__wrapper'>
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
                    </>

                )}


                <Button
                    text='Load More Animes'
                    onClick={(e) => handleLoadMore(e)} />


            </section>
            <Footer />

        </>
    )
}
export default GenrePageDetails