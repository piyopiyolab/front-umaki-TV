import { Helmet, HelmetProvider } from "react-helmet-async";
import "./UserPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserInfos } from "../../redux/thunk/get.UserInfo.thunk";



function UserPage() {

    const { data } = useSelector(states => states.userSlice);
    const dispatch = useDispatch();

    // Met ça dans App pour que ça re Set le user en cas de rechargement
    useEffect(() => {
        // Permet de récup les infos du user et de les set si rechargement de page
        const token = localStorage.getItem('accessToken')
        console.log("Token userPage: ", token);
        if (token) {
            dispatch(getUserInfos())
        }
    }, [])


    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>Your settings - Umaki.TV</title>
                    <meta name="description" content="Update your settings if you want !" />
                </Helmet>

            </HelmetProvider>

            <Header />




            <Footer />


        </>
    )
}
export default UserPage