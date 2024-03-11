import './AnimeDetailsPage.scss';
import { useDispatch, useSelector } from "react-redux"
import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAnimeIDThunk } from '../../redux/thunk/get.animeID.thunk';
import spinner from '../../assets/spinner.svg'
import Button from '../../Components/Button/Button';
import { postAnimeThunk } from '../../redux/thunk/post.addAnime.thunk';
import { APP_ROUTES } from '../../constants/routes.constants';
import React from 'react';

function AnimeDetails() {

    const { animeID } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showList, setShowList] = useState(false)

    const [newAnime, setNewAnime] = useState('')

    const { data, loading, error } = useSelector((state) => state.animeSlice);

    const token = localStorage.getItem('accessToken');


    // Check if body has lightmode class'
    const isLightMode = document.body.classList.contains('lightmode');


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
    const handleAddAnime = (stateList) => {


        dispatch(postAnimeThunk({
            anime_id: animeID,
            anime_state: stateList,
            nb_episodes: data.episodes,
            synopsis: data.synopsis,
            media: data.image,
            title: data.title,
            genre: data.genre.map(genre => genre.name).join(', '),
            release_date: data.year,
        }));
        console.log('new anime to list', animeID, stateList, data.episodes, data.synopsis, data.image, data.title, data.genre.map(genre => genre.name).join(' ,'), data.year);


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

            {/* Object data Banner hero*/}
            {data && (

                <section className={`anime-details ${isLightMode ? 'lightmode' : ''}`}>
                    <div className='anime-details__hero'>

                        <img loading="lazy" src={data.image} alt={data.title} />

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
                                {data.genre && data.genre.length > 0 && (
                                    <p>
                                        {data.genre.map((g, i) => (
                                            <span key={i}>
                                                {g.name}
                                                {i < data.genre.length - 1 && ', '}
                                            </span>
                                        ))}
                                    </p>
                                )}

                                {/* Button Adding to your list */}
                                <Button
                                    onClick={() => {
                                        if (token) {
                                            setShowList(!showList)
                                        }
                                        else {
                                            navigate(APP_ROUTES.SIGN_UP, { replace: true });
                                        }

                                    }}
                                    text={token ? 'Add to your list' : 'Log-in to save it !'} />



                                {token && (
                                    <div className={`anime-details__hero__r__main__addingListBtn ${showList ? '' : 'hidden'}`}>
                                        <button
                                            onClick={() => handleAddAnime('to_see')} >To See</button>
                                        <button
                                            onClick={() => handleAddAnime('watched')}
                                        >Watched</button>
                                        <button
                                            onClick={() => handleAddAnime('on_going')}
                                        >On Going</button>
                                    </div>
                                )}






                            </div>
                        </div>
                    </div>
                </section>

            )}



            {/* Synopsis*/}
            <section className={`anime-details-synopsis ${isLightMode ? 'lightmode' : ''}`}>
                <article>
                    <h2>Synopsis</h2>
                    {data && (
                        <p>{data.synopsis}</p>
                    )}
                </article>
            </section>

            {/* section more infos 2 articles*/}
            <section className={`anime-details-additionalinfos ${isLightMode ? 'lightmode' : ''}`}>
                <article>
                    <h2>More infos</h2>
                    {data && (
                        <>
                            <p><span>English title : </span>{`${data.title_eng}`}</p>
                            <p><span>Title : </span>{`${data.title}`}</p>
                            {data.synonym == [] && (
                                <p><span>Synonym : </span>{`${data.synonym}`}</p>
                            )}
                            <p><span>Duration : </span>{`${data.duration}`}</p>
                            <p><span>Source : </span>{`${data.source}`}</p>
                            {data.producers && data.producers.length > 0 && (
                                <>

                                    <p> <span>Producers :</span>

                                        {data.producers && data.producers.length > 1 && (
                                            data.producers.map((producer, index) => (
                                                ` ${producer.name}${index < data.producers.length - 1 ? ', ' : ''}`

                                            ))
                                        )}
                                    </p>
                                </>


                            )}


                            {data?.studios?.length > 0 && (

                                <p><span> Studio :</span>
                                    {data.studios?.map((s, i) => (
                                        ` ${s.name}${i < data.studios.length - 1 ? ', ' : ''}`

                                    ))}


                                </p>
                            )}
                        </>
                    )}
                </article>
                <article>
                    <h2>Watch Episodes</h2>
                    {data && (
                        <>
                            <>
                                {
                                    data.streaming?.map((studio, index) => (
                                        <React.Fragment key={index}>
                                            <a href={studio.url}>{studio.name}</a>
                                            {index < data.streaming.length - 1 && ', '}
                                        </React.Fragment>
                                    ))
                                }
                            </>

                            <Button text="Watch Trailer"
                                onClick={() => window.open(data.trailer, '_blank')}

                            />
                        </>

                    )}
                </article>

                <Button
                    onClick={() => {
                        navigate(APP_ROUTES.HOME, { replace: true })
                    }}
                    text='Discover more animes' />
            </section>


            <section className='anime-details-characters'>

            </section>
            {/* Footer */}
            <Footer />

        </>
    )
}
export default AnimeDetails