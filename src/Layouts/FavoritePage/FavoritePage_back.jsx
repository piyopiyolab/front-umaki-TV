import "./FavoritePage.scss"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getUserList } from "../../redux/thunk/thunk.get.userList"
import spinner from '../../assets/spinner.svg'
import chibi from "/images/404-umaki-tv.png"
import Button from "../../Components/Button/Button"


function FavoritePage() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.userSlice);


    //API request
    useEffect(() => {

        dispatch(getUserList());

    }, [])


    //Error handler
    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }
    if (error) {
        return <p>An error has occurred</p>;
    }

    //error display
    let errorTxt =
        <div>

            <img src={chibi} alt='chibi error umaki.tv' />
            <p className="text-center">Oops, something went wrong...</p>
            <Button
                onClick={() => { dispatch(topanimeThunk()) }}
                text="Please, try again" />
        </div>


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
            <h1 className="text-center">Welcome to your Library 100% anime</h1>
            <div>
                {/* Boutons de filtre */}
                <button onClick={() => handleFilterChange('on_going')}>Continue</button>
                <button onClick={() => handleFilterChange('watched')}>Watched</button>
                <button onClick={() => handleFilterChange('to_see')}>To See</button>
            </div>



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
                errorTxt
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
