import './AnimeDetailsPage.scss';
import { useDispatch, useSelector } from "react-redux"
import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAnimeIDThunk } from '../../redux/thunk/thunk.get.animeID';
import spinner from '../../assets/spinner.svg'
import Button from '../../Components/Button/Button';
import { postAnimeThunk } from '../../redux/thunk/thunk.post.addAnime';
import { APP_ROUTES } from '../../constants/routes.constants';


function AnimeDetails() {

    const { animeID } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [newAnime, setNewAnime] = useState({
    //     anime_id: animeID,
    //     anime_state: undefined,
    //     nb_episodes,
    //     synopsis,
    //     media,
    //     title,
    //     genre,
    //     release_date,
    // });

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


            {/* Object data Banner hero*/}
            {data && (

                <section className="anime-details">
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
                                <Button
                                    onClick={handleAddAnime}
                                    text="Add to your list" />
                            </div>
                        </div>
                    </div>
                </section>

            )}



            {/* Synopsis*/}
            <section className='anime-details-synopsis'>
                <article>
                    <h2>Synopsis</h2>
                    {data && (
                        <p>{data.synopsis}</p>
                    )}
                </article>
            </section>

            {/* section more infos 2 articles*/}
            <section className='anime-details-additionalinfos'>
                <article>
                    <h2>More infos</h2>
                    {data && (
                        <>
                            <p>{`title : ${data.title}`}</p>
                            <p>{`Synonym : ${data.synonym}`}</p>
                            <p>{`Duration : ${data.duration}`}</p>
                            <p>{`Source : ${data.source}`}</p>
                            {data.producers && data.producers.length > 0 && (
                                <p> Producers :
                                    {data.producers.map((p, i) => (
                                        <span key={i}>
                                            {p.name}
                                        </span>
                                    ))}

                                </p>
                            )}


                            {data?.studios?.length > 0 && (

                                <p> Studio :
                                    {data.studios.map((s, i) => (
                                        <span key={i}>
                                            {s.name}
                                        </span>
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

                            {data.streaming.map((studio, index) => (
                                <div key={index}>
                                    <a href={studio.url}>{studio.name}</a>
                                </div>
                            ))}

                            <a href={data.trailer} className="btn">Watch Trailer</a>
                        </>

                    )}
                </article>

                <Button
                    // onClick={() => {
                    //     navigate(APP_ROUTES.HOME, { replace: true })
                    // }}
                    text='Discover more animes' />
            </section>



            {/* Footer */}
            <Footer />

        </>
    )
}
export default AnimeDetails