import "./ModalSettings.scss"
import { useState } from "react"


function ModalSettings({ closeModal }) {
    return (
        <div
            className="modalSettings"
            onClick={closeModal}>

            <h1>User Settings</h1>

            <p>Email :</p>
            <p>Pseudo :</p>
            <p>mot de passe :</p>
            <p>Your avatar :</p>

        </div>
    )
}
export default ModalSettings