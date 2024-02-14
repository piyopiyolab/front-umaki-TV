import { Helmet, HelmetProvider } from "react-helmet-async";
import "./UserPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getUserInfos } from "../../redux/thunk/get.UserInfo.thunk";
import Button from "../../Components/Button/Button"
import { useState } from "react";
import offIcon from '../../assets/icons/power-off-solid.svg'
import trashIcon from '../../assets/icons/trash-solid.svg'
import penIcon from '../../assets/icons/pencil-solid.svg'
import closeIcon from '../../assets/icons/close.svg'
import { clearAccessToken } from "../../utils/clearToken";
import Input from "../../Components/Input/Input";
import { createPortal } from 'react-dom';
import Modal from "../../Components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes.constants";
import { AVATAR_IMAGES } from "../../constants/avatar.constants";

function UserPage() {

    const { data } = useSelector(states => states.userSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken')

        if (token) {
            dispatch(getUserInfos())
        }
    }, [])

    // Avatar 

    const [selectedAvatar, setSelectedAvatar] = useState("");


    const [showAvatar, setShowAvatar] = useState(false);

    const handleAvatarClick = (itemName) => {
        setSelectedAvatar(itemName);
    };



    const [logOutModal, setLogOutModal] = useState(false)

    // Deconnexion button => Clear Local Storage
    const handleDeconnexion = () => {
        clearAccessToken();
        navigate(APP_ROUTES.HOME);

    };

    // Deconnexion button => Clear Local Storage
    const handleDeleteAccount = () => {

        // navigate(APP_ROUTES.HOME);

    };

    const [toggleIcon, setToggleIcon] = useState(false)

    // Modifiy userInfos 
    const [showInput, setShowInputs] = useState({
        pseudo: false,
        email: false,
        avatar: false,
    })


    const handleToggleInput = (inputName) => {
        setShowInputs(prevState => ({
            ...prevState,
            [inputName]: !prevState[inputName],
        }));

        setToggleIcon(!toggleIcon);
    };


    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>Your settings - Umaki.TV</title>
                    <meta name="description" content="Update your settings if you want !" />
                </Helmet>

            </HelmetProvider>

            <Header />


            {/* Content */}
            <section className="user-settings">
                <h1>Welcome to your profile </h1>


                {data && data.length > 0 && (
                    <>
                        <article>
                            <div>
                                <span >Your avatar :</span>
                                <img src={data[0].avatar} className="avatar" alt='avatar' />
                                <Button text='Change your avatar'
                                    onClick={(e) => {
                                        setShowAvatar(!showAvatar);
                                    }} />
                                {showAvatar ? (
                                    <div className='avatar-grid'>
                                        {AVATAR_IMAGES.map((avatar, index) => (
                                            <img
                                                key={index}
                                                src={avatar}
                                                alt={`Avatar ${index + 1}`}
                                                className={`avatar-grid-item ${selectedAvatar === avatar ? "selected" : ""}`}
                                                onClick={() => {
                                                    handleAvatarClick(avatar)
                                                }}
                                            />
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <p><span>Pseudo : </span>{data[0].pseudo}
                                    <img
                                        onClick={() => handleToggleInput("pseudo")}
                                        src={toggleIcon ? closeIcon : penIcon} alt='modify icon' /></p>

                                {showInput.pseudo && (
                                    <Input />
                                )}
                                <p><span>Email : </span> {data[0].email}
                                    <img
                                        onClick={() => handleToggleInput("email")}
                                        src={toggleIcon ? closeIcon : penIcon} alt='modify icon' /></p>
                                {showInput.email && (
                                    <Input />
                                )}
                            </div>
                        </article>
                        <h2>Account Settings</h2>
                        <article className="user-settings__account-controls">

                            <Button text='deconnexion'
                                icon={offIcon}
                                onClick={() => setLogOutModal(true)} />
                            <Button
                                text='delete your account'
                                icon={trashIcon} />
                        </article>

                        {logOutModal &&
                            createPortal(
                                <Modal
                                    title={`Do you already want to leave us? `} content='If you confirm, you will be redirected to the homepage and will no longer be able to access your favourites unless you log in again.' closeModal={() => setLogOutModal(false)}
                                    confirm={handleDeconnexion} />,
                                document.body
                            )
                        }
                    </>
                )}
            </section>

            <Footer />


        </>
    )
}
export default UserPage