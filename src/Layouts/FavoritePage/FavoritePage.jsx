import "./FavoritePage.scss"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getUserList } from "../../redux/thunk/thunk.get.userList"



function FavoritePage() {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserList());
    }, []);



    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>Welcome to your library - Umaki.TV </title>
                    <meta name='description' content='Check your library to look at your viewing progress !' />
                </Helmet>
            </HelmetProvider>


            <Header />



            <Footer />


        </>
    )
}
export default FavoritePage
