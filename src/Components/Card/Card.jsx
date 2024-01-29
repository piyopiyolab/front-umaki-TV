import "./Card.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { topanimeThunk } from '../../redux/thunk/thunk.topanime.get'
import spinner from '../../assets/spinner.svg'
import arrowIcon from "../../assets/icons/arrowr-icon.svg"
import episodesIcon from "../../assets/icons/episodes-icon.svg"
import heartIcon from "../../assets/icons/heart-icon.svg"


function Card() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(topanimeThunk());


        }, []);

    const { data, loading } = useSelector((state) => state.animeSlice);

    if (loading) {
        return <img src={spinner} alt="Loading..." className="loader" />;
    }

    console.log("isLoading:", loading);
    console.log("topAnimeData:", data);
    return (
        <>

            <div className="wrapper">
                {data.map((animeID) => (
                    <div key={animeID.mal_id} className="wrapper__card">
                        <div className="wrapper__card__animeImg">
                            <img src={animeID.images.webp.large_image_url} alt="" />
                        </div>
                        <div className="wrapper__card__animeInfo">
                            <h1>{animeID.title_english}</h1>
                            <div className="wrapper__card__animeInfo__tags">
                                {animeID.genres.map((genreID) => (
                                    // Ajout de la clé ci-dessous
                                    <span key={genreID.id}>{genreID.name}</span>
                                ))}
                            </div>
                            <div className="wrapper__card__animeInfo__stats">
                                <p>{animeID.favorites}</p>
                                <p>
                                    <img src={episodesIcon} alt="episodes icon" />
                                    {animeID.episodes} episodes
                                </p>
                            </div>
                            <a href="" className="wrapper__card__btn">
                                Read More <img src={arrowIcon} alt="read more btn" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}
export default Card