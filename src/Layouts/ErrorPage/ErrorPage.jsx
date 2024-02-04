import Button from '../../Components/Button/Button';
import ErrorContent from '../../Components/ErrorContent/ErrorContent'
import './ErrorPage.scss'
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useSelector } from 'react-redux';




function ErrorPage() {

    const { loggedIn } = useSelector(states => states.userSlice);
    console.log(loggedIn);

    let typeError;


    if (!loggedIn) {
        typeError = 'log-out'
    } else {
        typeError = 'error'
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


            {/* Content */}
            <div className='errorPageBody'>


                <ErrorContent type={typeError} />

            </div>


        </>
    )
}
export default ErrorPage