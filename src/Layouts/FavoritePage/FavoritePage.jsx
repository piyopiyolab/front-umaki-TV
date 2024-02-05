import "./FavoritePage.scss"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getUserList } from "../../redux/thunk/thunk.get.userList"
import spinner from '../../assets/spinner.svg'
import Button from "../../Components/Button/Button"
import { APP_ROUTES } from "../../constants/routes.constants"
import { useNavigate } from "react-router-dom";
import ErrorContent from "../../Components/ErrorContent/ErrorContent"

function FavoritePage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { data, loading, error, loggedIn } = useSelector((state) => state.userSlice);

    const [selectedFilter, setSelectedFilter] = useState('on_going');
    const [animeLists, setAnimeLists] = useState([]);



    //API request
    useEffect(() => {
        dispatch(getUserList());

    }, [])


    //Set animeList from API Request for filter function
    useEffect(() => {
        if (!data) return;
        setAnimeLists(data)
        console.log('data for filter', animeLists)
    }, [data]);


    //Error handler
    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }



    //     // Verif token, use effect, if token return, 
    // useEffect(() => {
    //     if(!token) ou loggedIn {
    // navigate(APP_ROUTES.SIGN_UP)

    // if(!user) {
    //     navigate(APP_ROUTES.SIGN_UP)
    // }
    // return
    //    
    //     dispatch(checkToken())
    // },[])

    //Redirect if error
    const handleRedirectToSignup = () => {
        navigate(APP_ROUTES.SIGN_UP, { replace: true });
    };
    const handleRedirectLogIn = () => {
        navigate(APP_ROUTES.LOG_IN, { replace: true });
    };


    const handleRedirectHomepage = () => {
        navigate(APP_ROUTES.HOME, { replace: true });

    }

    //Filter function
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);

    };


    const filteredAnimeList = animeLists.filter(anime => anime.anime_state === selectedFilter);



    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>Welcome to your library - Umaki.TV </title>
                    <meta name='description' content='Check your library to look at your viewing progress !' />
                </Helmet>
            </HelmetProvider>


            <Header />

            <section className="your-collection">
                <div className="your-collection__headings">
                    <h1>Your collection</h1>
                    <h2>Check out your favorite animes</h2>
                </div>




                {/* DISPLAYED LIST IF LOGGED */}
                {loggedIn ? (
                    <div className="your-collection__lists">
                        <div className="your-collection__lists__filters">
                            {/* filters controls */}
                            <p
                                className={selectedFilter === 'on_going' ? 'filtered' : ''}
                                onClick={() => handleFilterChange('on_going')}>
                                Continue
                            </p>
                            <p
                                className={selectedFilter === 'watched' ? 'filtered' : ''}
                                onClick={() => handleFilterChange('watched')}>
                                Watched
                            </p>
                            <p
                                className={selectedFilter === 'to_see' ? 'filtered' : ''}
                                onClick={() => handleFilterChange('to_see')}>
                                To See
                            </p>
                        </div>

                        <div>
                            {/* Anime State List */}
                            {filteredAnimeList?.length > 0 && (
                                filteredAnimeList.map(anime => (
                                    <article key={anime.anime_id} className="your-collection__lists__card">
                                        <div className="your-collection__lists__card__banner">
                                            <img src={anime.media} alt={anime.title} />
                                        </div>
                                        <h3 className="text-center">{anime.title}</h3>
                                    </article>
                                ))
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <ErrorContent type='log-out' />
                        <div className="your-collection__lists__errorBtn">
                            <Button text='Log-in'
                                onClick={handleRedirectLogIn} />
                            <Button text='Sign-up'
                                onClick={handleRedirectToSignup} />
                        </div>
                    </>
                )}









                {filteredAnimeList.length === 0 && loggedIn && (
                    <>
                        <ErrorContent type='addAnime' />
                        <div className="your-collection__lists__errorBtn">
                            <Button text='Add an anime'
                                onClick={handleRedirectHomepage} />

                        </div>
                    </>
                )}

            </section>
            <Footer />


        </>
    )
}
export default FavoritePage