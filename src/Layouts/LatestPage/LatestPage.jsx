import './LatestPage.scss'
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { animeSeasonThunk } from '../../redux/thunk/get.animeSeason.thunk'
import spinner from '../../assets/spinner.svg'
import ErrorContent from '../../Components/ErrorContent/ErrorContent'
import Button from '../../Components/Button/Button'

function LatestPage() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.animeSlice);

    useEffect(() => {
        dispatch(animeSeasonThunk())
        console.log(data)
    }, [data])

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome the latest anime page - Umaki.TV </title>
                    <meta name='description' content='Welcome, discover latest animes for the current season !' />
                </Helmet>
            </HelmetProvider>


            <Header />
            <section className="latest-animes">
                <h1>The latest Anime for the XXX</h1>

                {data.animeDetail?.length > 0 && (


                    data.animeDetail.map((d) => {
                        <article key={d.mal_id}>{d.title}</article>
                    })
                )}


            </section>

            <Footer />
        </>
    )
}
export default LatestPage