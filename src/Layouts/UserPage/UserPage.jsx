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
import okIcon from '../../assets/icons/check-solid.svg'
import { clearAccessToken } from "../../utils/clearToken";
import Input from "../../Components/Input/Input";
import { createPortal } from 'react-dom';
import Modal from "../../Components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes.constants";
import { AVATAR_IMAGES } from "../../constants/avatar.constants";
import { updateEmailThunk } from "../../redux/thunk/put.userEmail.thunk";
import DarkMode from "../../Components/DarkMode/DarkMode";
import { updatePseudoThunk } from "../../redux/thunk/put.userPseudothunk";

function UserPage() {

    const { userData } = useSelector(states => states.userSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken')

        if (token) {
            dispatch(getUserInfos())
        }

    }, [userData])

    // Avatar 

    const [selectedAvatar, setSelectedAvatar] = useState("");
    const [showAvatar, setShowAvatar] = useState(false);

    const handleAvatarClick = (itemName) => {
        setSelectedAvatar(itemName);
    };

    const [logOutModal, setLogOutModal] = useState(false)

    const [pseudoValue, setPseudoValue] = useState("");
    const [emailValue, setEmailValue] = useState("");



    // Update Email
    const handleUpdateEmail = (email) => {
        dispatch(updateEmailThunk(email));
    }

    const handleUpdatePseudo = (pseudo) => {
        dispatch(updatePseudoThunk(pseudo));
    }

    // Deconnexion button => Clear Local Storage
    const handleDeconnexion = () => {
        clearAccessToken();
        navigate(APP_ROUTES.HOME);

    };

    // Deconnexion button => Delete account
    const handleDeleteAccount = () => {

        // navigate(APP_ROUTES.HOME);

    };

    const [toggleIcon, setToggleIcon] = useState(false)

    // Modifiy userInfos 
    const [showInputs, setShowInputs] = useState({
        pseudo: false,
        email: false,
        avatar: false,
    })


    const handleToggleInput = (inputName) => {

        setShowInputs({ ...showInputs, [inputName]: !showInputs[inputName] });
        setToggleIcon(!toggleIcon);
        console.log('value to change :', inputName, showInputs)
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
                <DarkMode />

                {userData && Object.keys(userData).length > 0 && (
                    <>
                        <article>

                            <div className="user-settings__updates-avatar">

                                <span>Your avatar :</span>
                                <img src={userData[0].avatar} className="avatar" alt='avatar' />
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

                            <div className="user-settings__updates">
                                {/* Updates Email */}

                                <div className="user-settings__updates__email">


                                    <p>
                                        <span>Email : </span> {userData[0].email}
                                        <img
                                            onClick={() => handleToggleInput("email")}
                                            src={toggleIcon ? closeIcon : penIcon} alt='modify icon' />
                                    </p>
                                    {showInputs.email && (
                                        <>


                                            <div className="user-settings__updates__email__inputs">
                                                <Input
                                                    type='email'
                                                    onChange={(e) => setEmailValue(e.target.value)}
                                                    value={emailValue}
                                                />

                                                <img
                                                    onClick={() => handleUpdateEmail(emailValue)}
                                                    className='icon' src={okIcon} />

                                            </div>
                                        </>
                                    )}

                                </div>

                                {/* Updates Pseudo */}

                                <div className="user-settings__updates__pseudo">


                                    <p>
                                        <span>pseudo : </span> {userData[0].pseudo}
                                        <img
                                            onClick={() => handleToggleInput("pseudo")}
                                            src={toggleIcon ? closeIcon : penIcon} alt='modify icon' />
                                    </p>
                                    {showInputs.pseudo && (
                                        <>


                                            <div className="user-settings__updates__pseudo__inputs">
                                                <Input
                                                    type='text'
                                                    onChange={(e) => setPseudoValue(e.target.value)}
                                                    value={pseudoValue}
                                                />

                                                <img
                                                    onClick={() => handleUpdatePseudo(pseudoValue)}
                                                    className='icon' src={okIcon} />

                                            </div>
                                        </>
                                    )}

                                </div>
                            </div>
                        </article>




                        {/* Account */}

                        <h2>Account Settings</h2>
                        <div className="user-settings__account-controls">

                            <Button text='deconnexion'
                                icon={offIcon}
                                onClick={() => setLogOutModal(true)} />
                            <Button
                                text='delete your account'
                                icon={trashIcon} />
                        </div>


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

            </section >

            <Footer />


        </>
    )
}
export default UserPage