import "./FavoritePage.scss"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getUserList } from "../../redux/thunk/get.userList.thunk"
import spinner from '../../assets/spinner.svg'
import Button from "../../Components/Button/Button"
import { APP_ROUTES } from "../../constants/routes.constants"
import { useNavigate } from "react-router-dom";
import ErrorContent from "../../Components/ErrorContent/ErrorContent"
import trashIcon from '../../assets/icons/trash-solid.svg'
import { deleteAnimeFromUserList } from "../../redux/thunk/delete.animeFromUserList.thunk"
import { getUserInfos } from "../../redux/thunk/get.UserInfo.thunk"
getUserInfos

function FavoritePage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { userData, loading, loggedIn } = useSelector((state) => state.userSlice);
    const { data } = useSelector((state) => state.animeSlice);

    const [selectedList, setSelectedList] = useState('on_going');
    const [deleteAnimeId, setDeleteAnimeId] = useState({
        anime_id: undefined,
        anime_state: undefined,
    });

    //API request
    useEffect(() => {
        dispatch(getUserList());
        console.log(data)

    }, [userData])


    useEffect(() => {

    }, [deleteAnimeId]);


    //Error handler
    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }

    const token = localStorage.getItem('accessToken');

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




    //Settings redirection UseSettings
    const handleClickSettings = () => {


        navigate(`${APP_ROUTES.USER}`, { replace: true });

    }

    //Remove from list
    const handleRemoveAnime = (id, state, userId) => {

        userId = userData.user_id

        setDeleteAnimeId({ ...deleteAnimeId, anime_id: id, anime_state: state });
        dispatch(deleteAnimeFromUserList(id, state, userId))
    }

    //Filter function
    const handleFilterChange = (filter) => {
        setSelectedList(filter);
    };



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
                    {token && (
                        <p
                            onClick={handleClickSettings}
                        >
                            Update your settings</p>

                    )}

                </div>



                {/* DISPLAYED LIST IF LOGGED */}
                {loggedIn ? (
                    <div className="your-collection__lists">
                        <div className="your-collection__lists__filters">
                            <p
                                className={selectedList === 'on_going' ? 'active' : ''}

                                onClick={() => handleFilterChange('on_going')}>
                                Continue
                            </p>
                            <p
                                className={selectedList === 'to_see' ? 'active' : ''}
                                onClick={() => handleFilterChange('to_see')}>
                                To see
                            </p>
                            <p
                                className={selectedList === 'watched' ? 'active' : ''}
                                onClick={() => handleFilterChange('watched')}>
                                Watched
                            </p>
                        </div>

                        <div className="your-collection__lists__content">


                            {/* On going userList*/}
                            {selectedList === 'on_going' && (
                                <>
                                    {data.on_going?.length > 0 ? (
                                        data.to_see.map((anime, index) => (
                                            <article className="your-collection__lists__card" key={index}>
                                                <img loading="lazy" src={anime.media} alt={anime.title} />
                                                <div>
                                                    <h3>{anime.title}</h3>
                                                    <Button
                                                        icon={trashIcon}
                                                        text='Remove from list'
                                                        onClick={() => handleRemoveAnime(anime.anime_id, anime.anime_state)}
                                                    />
                                                </div>
                                            </article>
                                        ))
                                    ) : (
                                        <>
                                            <ErrorContent type='addAnime' />
                                            <div className="your-collection__lists__errorBtn">
                                                <Button text='Add an anime'
                                                    onClick={handleRedirectHomepage} />

                                            </div>
                                        </>
                                    )}
                                </>
                            )}





                            {/* to_see userList */}

                            {selectedList === 'to_see' && (
                                <>
                                    {data.to_see?.length > 0 ? (
                                        data.to_see.map((anime, index) => (
                                            <article className="your-collection__lists__card" key={index}>
                                                <img loading="lazy" src={anime.media} alt={anime.title} />
                                                <div>
                                                    <h3>{anime.title}</h3>
                                                    <Button
                                                        icon={trashIcon}
                                                        text='Remove from list'
                                                        onClick={() => handleRemoveAnime(anime.anime_id, anime.anime_state)}
                                                    />
                                                </div>
                                            </article>
                                        ))
                                    ) : (
                                        <>
                                            <ErrorContent type='addAnime' />
                                            <div className="your-collection__lists__errorBtn">
                                                <Button text='Add an anime'
                                                    onClick={handleRedirectHomepage} />

                                            </div>
                                        </>
                                    )}
                                </>
                            )}



                            {/* watched userList */}

                            {selectedList === 'watched' && (
                                <>
                                    {data.watched?.length > 0 ? (
                                        data.watched.map((anime, index) => (
                                            <article className="your-collection__lists__card" key={index}>
                                                <img loading="lazy" src={anime.media} alt={anime.title} />
                                                <div>
                                                    <h3>{anime.title}</h3>
                                                    <Button
                                                        icon={trashIcon}
                                                        text='Remove from list'
                                                        onClick={() => handleRemoveAnime(anime.anime_id, anime.anime_state)}
                                                    />
                                                </div>
                                            </article>
                                        ))
                                    ) : (
                                        <>
                                            <ErrorContent type='addAnime' />
                                            <div className="your-collection__lists__errorBtn">
                                                <Button text='Add an anime'
                                                    onClick={handleRedirectHomepage} />

                                            </div>
                                        </>
                                    )}
                                </>
                            )}


                            {/* Check if data is empty and show "Add anime" */}
                            {Object.keys(data).length === 0 && (
                                <>
                                    <ErrorContent type='addAnime' />
                                    <div className="your-collection__lists__errorBtn">
                                        <Button text='Add an anime'
                                            onClick={handleRedirectHomepage} />

                                    </div>
                                </>
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









                {data.length === 0 && loggedIn && (
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