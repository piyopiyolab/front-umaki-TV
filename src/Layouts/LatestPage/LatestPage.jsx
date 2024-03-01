import './LatestPage.scss'
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { animeSeasonThunk } from '../../redux/thunk/get.animeSeason.thunk'

function LatestPage() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.animeSlice);

    useEffect(() => { dispatch(animeSeasonThunk()) }, [data])
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome the latest anime page - Umaki.TV </title>
                    <meta name='description' content='Welcome, discover latest animes for the current season !' />
                </Helmet>
            </HelmetProvider>


            <Header />


            <Footer />
        </>
    )
}
export default LatestPage