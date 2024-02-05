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
import { postAnimeThunk } from '../../redux/thunk/thunk.post.addAnime';


function AnimeDetails() {

    const { animeID } = useParams();
    const dispatch = useDispatch();

    const [newAnime, setNewAnime] = useState({
        anime_id,
        anime_state,
        nb_episodes,
        synopsis,
        media,
        title,
        genre,
        release_date,
    });

    const { data, loading } = useSelector((state) => state.animeSlice);

    useEffect(() => {

        dispatch(getAnimeIDThunk(animeID))

    }, [animeID])


    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }

    if (!data) {
        return <p>Error: Anime details not available.</p>;
    }


    // AddAnime
    const handleAddAnime = () => {
        dispatch(postAnimeThunk());

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


            {/* Object data */}
            {data && (

                <div className="anime-details">
                    <div className='anime-details__hero'>

                        <img src={data.image} alt={data.title} />

                        <div className="anime-details__hero__r">
                            <div className='anime-details__hero__r__date-info'>
                                <p className={data.status === 'Currently Airing' ? 'airing' : 'finished'}>
                                    {data.status}
                                </p>
                                <p>{`${data.season} ${data.year}`}</p>
                            </div>
                            <div className='anime-details__hero__r__main'>
                                <div>

                                    <p>{data.title_jap}</p>
                                    <p>{data.title}</p>

                                </div>
                                <span>{data.rating}</span>
                                <h1>{data.title}</h1>
                                <p>
                                    {/* {data.genre.map(genre => (
                                        <span key={genre.mal_id}>{genre.name}</span>
                                    ))} */}
                                </p>
                                <Button
                                    onClick={handleAddAnime}
                                    text="Add to your list" />
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