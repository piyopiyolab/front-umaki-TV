import './AnimeDetailsPage.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function AnimeDetails() {



    const { data, loading } = useSelector((state) => state.animeSlice);



    if (!data) {
        return null;
    }
    console.log(data)


    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Welcome to HomePage- Umaki.TV </title>
                    <meta name='description' content='Welcome to Umaki.TV, start by creating your account or log-in to start tracking your viewing progress !' />
                </Helmet>
            </HelmetProvider>

            {/* Header */}
            <Header />




            <div className="anime-details">
                <h1>Detail</h1>
                {data && (
                    Array.isArray(data) && data.length > 0 ? (
                        data.map((d) => (
                            <article key={d.mal_id} className="wrapper__card">
                                <h1>Hello</h1>
                            </article>
                        ))
                    ) : (
                        <p>Aucune donnée à afficher.</p>
                    )
                )}

            </div>


            {/* Footer */}
            <Footer />

        </>
    )
}
export default AnimeDetails