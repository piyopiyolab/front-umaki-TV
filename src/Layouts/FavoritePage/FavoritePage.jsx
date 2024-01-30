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



            <div>
                {data.map((id) => (
                    <div key={id.anime_id}>
                        <span>{id.anime_id}</span>
                        <span>{id.anime_state}</span>
                    </div>
                ))}
            </div>
            <Footer />


        </>
    )
}
export default FavoritePage
