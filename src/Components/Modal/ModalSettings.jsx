import "./Modal.scss"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfos } from "../../redux/thunk/get.UserInfo.thunk";
function ModalSettings({ closeModal }) {
    const dispatch = useDispatch();
    const { data, loading, error, loggedIn, user_id } = useSelector((state) => state.userSlice);


    //API request

    useEffect(() => {

        // if (loggedIn) {
        //     dispatch(getUserInfos())
        // }
    }, [data, loggedIn]);



    return (
        <div
            className="modal modalSettings"
            onClick={closeModal}>

            <h1>User Settings</h1>

            {/* <p>{`Email : ${data.email}`}</p> */}
            <p>Pseudo :</p>
            <p>mot de passe :</p>
            <p>Your avatar :</p>

        </div>
    )
}
export default ModalSettings