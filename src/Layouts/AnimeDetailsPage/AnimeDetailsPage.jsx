import './AnimeDetailsPage.scss';
import { useDispatch, useSelector } from "react-redux"
import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getAnimeIDThunk } from '../../redux/thunk/thunk.get.animeID';
import spinner from '../../assets/spinner.svg'
import Button from '../../Components/Button/Button';

function AnimeDetails() {

    const { animeID } = useParams();
    const dispatch = useDispatch();
    const [animeDetails, setanimeDetails] = useState([]);

    const { data, loading } = useSelector((state) => state.animeSlice);

    useEffect(() => {

        dispatch(getAnimeIDThunk(animeID))

    }, [])


    //Set animeList from API Request for filter function
    useEffect(() => {

        if (!data) return;
        setanimeDetails(data)
        console.log('data for filter', animeLists)
    }, [data]);




    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }

    if (!data) {
        return <p>Error: Anime details not available.</p>;
    }


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



            {data.length > 0 && (

                <div className="anime-details">
                    <div className='anime-details__hero'>
                        <img src={data.images.webp.large_image_url} alt={data.title} />
                        <div className="anime-details__hero__r">
                            <div className='anime-details__hero__r__date-info'>
                                <p className={data.status === 'Currently Airing' ? 'airing' : 'finished'}>
                                    {data.status}
                                </p>
                                <p>{`${data.season.charAt(0).toUpperCase() + data.season.slice(1)} ${data.year}`}</p>
                            </div>
                            <div className='anime-details__hero__r__main'>
                                <div>

                                    <p>{data.title_japanese}</p>
                                    <p>{data.title}</p>

                                </div>
                                <span>{data.rating}</span>
                                <h1>{data.title_english}</h1>
                                <p>
                                    {data.genres.map((genre) => genre.name).join(', ')}
                                </p>
                                <Button text="Add to your list" />
                            </div>
                        </div>
                    </div>
                </div>

            )}






            {/* Footer */}
            <Footer />

        </>
    )
}
export default AnimeDetails