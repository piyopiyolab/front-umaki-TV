import { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './GenrePageDetails.scss';
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimeGenreThunk } from '../../redux/thunk/get.animeGenre.thunk';
import spinner from '../../assets/spinner.svg'
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

    const handleRedirectHome = () => {
        navigate(APP_ROUTES.HOME)
    }
    const handleRedirectFavorite = () => {
        navigate(APP_ROUTES.FAVORITE)
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
                                    onClick={() => handleRedirectHome()}
                                    text='come back home' />
                                <Button
                                    onClick={() => handleRedirectFavorite()}
                                    text='go to favorite' />

                            </div>

                        </div>
                    </>

                ) : (
                    <>
                        <h1 className='text-center'>Choose your favorite <span> </span>anime !</h1>
                        <div className='genre__body__wrapper'>
                        </div>
                    </>

                )}



            </section>
            <Footer />

        </>
    )
}
export default GenrePageDetails