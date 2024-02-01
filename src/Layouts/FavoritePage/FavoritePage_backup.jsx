import "./FavoritePage.scss"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getUserList } from "../../redux/thunk/thunk.get.userList"
import spinner from '../../assets/spinner.svg'
import sadChibi from "/images/nolist-sad-anime.png"
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
        <div className="error-txt">
            <img src={sadChibi} alt='chibi error umaki.tv' />
            <p className="text-center">You don't have any animes in your list yet.</p>
            <Button
                onClick={() => { }}
                text="add an anime"
            />
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

            <section className="your-collection">
                <div className="your-collection__headings">
                    <h1>Your collection</h1>
                    <h2>Check out your favorite animes</h2>
                </div>
                <div className="your-collection__lists"></div>
                <div className="your-collection__lists__filters">
                    {/* Boutons de filtre */}
                    <p
                        className={selectedFilter === 'on_going' ? 'filtered' : ''}
                        onClick={() => handleFilterChange('on_going')}>Continue</p>
                    <p
                        className={selectedFilter === 'watched' ? 'filtered' : ''}
                        onClick={() => handleFilterChange('watched')}>Watched</p>
                    <p
                        className={selectedFilter === 'to_see' ? 'filtered' : ''}
                        onClick={() => handleFilterChange('to_see')}>To See</p>
                </div>




                {/* Anime State List */}


                {filteredAnimeList?.length > 0 ? (



                    filteredAnimeList.map(anime => (
                        <article key={anime.anime_id} className="your-collection__lists__card">

                            <div className="your-collection__lists__card__banner">
                                <img src={anime.media} alt={anime.title} />

                            </div>
                            <h3 className="text-center">{anime.title}</h3>
                        </article>

                    ))



                ) : (
                    errorTxt
                )

                }

            </section>
            <Footer />


        </>
    )
}
export default FavoritePage