import './AnimeDetailsPage.scss';
import { useDispatch, useSelector } from "react-redux"
import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
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
        console.log('dispatch get animeID', animeID)

    }, [animeID])


    //Set animeList from API Request for filter function
    useEffect(() => {



        setanimeDetails(data)

        console.log('animeDetails :', animeDetails)
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



            {animeDetails && (

                <div className="anime-details">
                    <div className='anime-details__hero'>
                        {animeDetails?.images?.webp && (
                            <img src={animeDetails.images.webp.large_image_url} alt={animeDetails.title} />
                        )}
                        <div className="anime-details__hero__r">
                            <div className='anime-details__hero__r__date-info'>
                                <p className={animeDetails.status === 'Currently Airing' ? 'airing' : 'finished'}>
                                    {animeDetails.status}
                                </p>
                                <p>{`${animeDetails.season.charAt(0).toUpperCase() + animeDetails.season.slice(1)} ${animeDetails.year}`}</p>
                            </div>
                            <div className='anime-details__hero__r__main'>
                                <div>

                                    <p>{animeDetails.title_japanese}</p>
                                    <p>{animeDetails.title}</p>

                                </div>
                                <span>{animeDetails.rating}</span>
                                <h1>{animeDetails.title_english}</h1>
                                <p>
                                    {animeDetails.genres.map((genre) => genre.name).join(', ')}
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