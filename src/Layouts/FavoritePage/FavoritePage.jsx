import "./FavoritePage.scss"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserList } from "../../redux/thunk/thunk.get.userList"
import spinner from '../../assets/spinner.svg'

function FavoritePage() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.userSlice);


    useEffect(() => {

        dispatch(getUserList());

    }, [])

    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }
    if (error) {
        return <p>An error has occurred</p>;
    }

    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>Welcome to your library - Umaki.TV </title>
                    <meta name='description' content='Check your library to look at your viewing progress !' />
                </Helmet>
            </HelmetProvider>


            <Header />


            {/* Anime State on going*/}

            {data?.length > 0 ? (

                data.map((d) => (
                    // Afficher uniquement si id.anime_state est "on_going"
                    d.anime_state === "on_going" && (
                        <section key={d.anime_id} className="wrapper__card" >
                            <h2>On Going</h2>
                            <div>
                                <div>
                                    <img src={d.media} alt={d.title} />
                                    <span >{d.title}</span>

                                </div>
                            </div>
                        </section>
                    )
                ))


            ) : (
                <p>No data, please add animes</p>
            )}


            {/* Anime State to See */}

            {data?.length > 0 ? (

                data.map((d) => (
                    d.anime_state === "to_see" && (
                        <section key={d.anime_id} className="wrapper__card">
                            <h2>To see</h2>
                            <div>
                                <div key={d.anime_id}>
                                    <img src={d.media} alt={d.title} />
                                    <span>{d.title}</span>

                                </div>
                            </div>
                        </section>
                    )
                ))


            ) : (
                <p>No data, please add animes</p>
            )}

            {/* Anime State Watched */}

            {data?.length > 0 ? (

                data.map((d) => (

                    d.anime_state === "watched" && (
                        <section key={d.anime_id} className="wrapper__card">
                            <h2>Watched</h2>
                            <div>
                                <div key={d.anime_id}>
                                    <img src={d.media} alt={d.title} />
                                    <span>{d.title}</span>

                                </div>
                            </div>
                        </section>
                    )
                ))


            ) : (
                <p>No data, please add animes</p>
            )}


            <Footer />


        </>
    )
}
export default FavoritePage
