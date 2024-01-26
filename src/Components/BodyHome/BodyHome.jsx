import "./BodyHome.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { topanimeThunk } from '../../redux/thunk/thunk.topanime.get'

function BodyHome() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(topanimeThunk());


        }, []);

    return (
        <>
            <div className="bodyHome__container">


            </div>
        </>
    )
}
export default BodyHome