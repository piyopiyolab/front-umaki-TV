import Button from '../../Components/Button/Button';
import ErrorContent from '../../Components/ErrorContent/ErrorContent'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './ErrorPage.scss'
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes.constants';



function ErrorPage() {

    const navigate = useNavigate();
    const handleRedirectHome = () => {

        navigate(APP_ROUTES.HOME, { replace: true });
    }
    const handleRedirectFavorite = () => {

        navigate(APP_ROUTES.FAVORITE, { replace: true });
    }


    return (


        <>
            {/* SEO */}
            <HelmetProvider>
                <Helmet>
                    <title>Error 404 : Page not found</title>
                    <meta name="description" content="Oops...The page that you're looking for doesn't exist anymore. What do you want to do ?" />
                </Helmet>
            </HelmetProvider>
            <Header />

            {/* Content */}
            <div className='errorPageBody'>
                <h1>You seem lost...</h1>

                <ErrorContent type='404' />
                <div className='errorPageBody__controls'>
                    <Button text='Home'
                        onClick={handleRedirectHome} />
                    <Button text='Favorite'
                        onClick={handleRedirectFavorite} />
                </div>
            </div>
            <Footer />


        </>
    )
}
export default ErrorPage