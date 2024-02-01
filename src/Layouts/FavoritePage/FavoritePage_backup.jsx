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

    const [selectedFilter, setSelectedFilter] = useState('watched');
    const [animeLists, setAnimeLists] = useState([]);



    //API request
    useEffect(() => {
        dispatch(getUserList());

    }, [])


    //Set animeList from API Request for filter function
    useEffect(() => {
        if (!data) return;
        setAnimeLists(data)
        console.log('data for filter', animeLists)
    }, [data]);


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




    //Filter function
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);

    };


    const filteredAnimeList = animeLists.filter(anime => anime.anime_state === selectedFilter);



    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>Welcome to your library - Umaki.TV </title>
                    <meta name='description' content='Check your library to look at your viewing progress !' />
                </Helmet>
            </HelmetProvider>


            <Header />

            <div className="your-collection">
                <div className="your-collection__headings">
                    <h1>Your collection</h1>
                    <h2>Check out your favorite animes</h2>
                </div>
                <div className="your-collection__lists"></div>
                <div className="your-collection__lists__filters">
                    {/* Boutons de filtre */}
                    <p onClick={() => handleFilterChange('on_going')}>Continue</p>
                    <p onClick={() => handleFilterChange('watched')}>Watched</p>
                    <p onClick={() => handleFilterChange('to_see')}>To See</p>
                </div>




                {/* Anime State List */}
                <h2>Anime List - {selectedFilter}</h2>


                {filteredAnimeList?.length > 0 ? (

                    <ul>
                        {filteredAnimeList.map(anime => (
                            <li key={anime.anime_id}>{anime.title}</li>
                        ))}
                    </ul>

                ) : (
                    errorTxt
                )

                }

            </div>
            <Footer />


        </>
    )
}
export default FavoritePage