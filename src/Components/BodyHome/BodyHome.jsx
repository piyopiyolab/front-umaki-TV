import "./BodyHome.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { topanimeThunk } from '../../redux/thunk/thunk.topanime.get'
import spinner from '../../assets/spinner.svg'

function BodyHome() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(topanimeThunk());


        }, []);

    const topAnimeData = useSelector((state) => state.topAnime);
    const isLoading = useSelector((state) => state.loading);

    if (isLoading) {
        return <img src={spinner} alt="Loading..." />;
    }

    console.log("isLoading:", isLoading);
    console.log("topAnimeData:", topAnimeData);
    return (
        <>
            <div className="bodyHome__container">
            </div>
        </>
    )
}
export default BodyHome