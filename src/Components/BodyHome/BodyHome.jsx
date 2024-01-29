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

    const { data, loading } = useSelector((state) => state.animeSlice);

    if (loading) {
        return <img src={spinner} alt="Loading..." />;
    }

    console.log("isLoading:", loading);
    console.log("topAnimeData:", data);
    return (
        <>
            <div className="bodyHome__container">
            </div>
        </>
    )
}
export default BodyHome