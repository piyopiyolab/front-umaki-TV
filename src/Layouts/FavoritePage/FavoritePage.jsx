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
    const [animeLists, setAnimeLists] = useState();



    // //API request
    // useEffect(() => {

    //     dispatch(getUserList());
    //     setAnimeLists(data)
    //     console.log('data for filter', animeLists)

    // }, [])


    // //Set animeList from API Request for filter function
    // useEffect(() => {
    //     if (data) {
    //         setAnimeLists(data);
    //     }
    // }, [data]);

    // Test
    const test = async () => {
        try {
            await dispatch(getUserList());
            setAnimeLists(data);
            console.log('data for filter', animeLists);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }


    useEffect(() => {
        test();
    }, []);


    // End test





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



    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>Welcome to your library - Umaki.TV </title>
                    <meta name='description' content='Check your library to look at your viewing progress !' />
                </Helmet>
            </HelmetProvider>


            <Header />


            <h1 className="text-center">Welcome to your Library 100% anime</h1>
            <div>
                {/* Boutons de filtre */}
                <button onClick={() => handleFilterChange('on_going')}>Continue</button>
                <button onClick={() => handleFilterChange('watched')}>Watched</button>
                <button onClick={() => handleFilterChange('to_see')}>To See</button>
            </div>




            {/* Anime State List */}
            <h2>Anime List - {selectedFilter}</h2>


            {/* <ul>
                {animeLists.map(anime => (
                    <li key={anime.anime_id}>{anime.title}</li>
                ))}
            </ul> */}


            <Footer />


        </>
    )
}
export default FavoritePage
