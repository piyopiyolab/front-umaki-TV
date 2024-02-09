import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { searchAnimeThunk } from "../../redux/thunk/thunk.searchAnime"
function SearchPage() {

    const dispatch = useDispatch();
    const { query } = useParams();

    useEffect(() => {


        dispatch(searchAnimeThunk(query))
        console.log('anime', query)


    }, [query])

    return (
        <>

            <HelmetProvider>
                <Helmet>

                    <title>Are you Looking for something special ? Umaki.TV </title>
                    <meta name='description' content='Maybe you already have a title in your mind ? Please use the Search Bar' />
                </Helmet>

            </HelmetProvider>

            <Header />

            {/* BODY */}

            <section className="search-results-page">
                <h1>Your research : {query} </h1>

            </section>

            <Footer />


        </>
    )
}
export default SearchPage