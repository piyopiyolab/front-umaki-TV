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
import spinner from '../../assets/spinner.svg'
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
import { updatePasswordThunk } from "../../redux/thunk/put.userPassword.thunk";
import { updateAvatarThunk } from "../../redux/thunk/put.userAvatar.thunk";



function UserPage() {

    const { userData, loading, error } = useSelector(states => states.userSlice);
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
    const handleAvatarClick = (itemName) => {
        setSelectedAvatar(itemName);
    };

    const [logOutModal, setLogOutModal] = useState(false)

    const [emailValue, setEmailValue] = useState("");
    const [pseudoValue, setPseudoValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [avatarValue, setAvatarValue] = useState("");



    // Update avatar
    const handleUpdateAvatar = (avatar) => {

        console.log(avatar)
        dispatch(updateAvatarThunk(avatar));



    }



    // Update Email
    const handleUpdateEmail = (email) => {
        dispatch(updateEmailThunk(email));
    }
    // Update Pseudo
    const handleUpdatePseudo = (pseudo) => {
        dispatch(updatePseudoThunk(pseudo));
    }
    // Update password
    const handleUpdatePassword = (password) => {
        console.log(password)
        dispatch(updatePasswordThunk(password));
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


    // Modifiy userInfos 
    const [showInputs, setShowInputs] = useState({
        pseudo: false,
        email: false,
        avatar: false,
        password: false,
    })


    const handleToggleInput = (inputName) => {

        setShowInputs({ ...showInputs, [inputName]: !showInputs[inputName] });
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
                {!localStorage.getItem('accessToken') && (
                    <>
                        <p>Please Log In</p>

                    </>
                )}

                {userData && Object.keys(userData).length > 0 && (
                    <>


                        {/* Update Avatar */}
                        <article className="user-settings__updates__avatar">



                            <div>
                                <h2>Your avatar :</h2>
                                <img src={userData[0]?.avatar} alt='avatar' />
                                <div >
                                    <Button text={showInputs.avatar ? 'Cancel selection' : `Change your avatar`}
                                        onClick={() => handleToggleInput("avatar")} />

                                    {showInputs.avatar && (
                                        <Button text={'Update your avatar'}
                                            onClick={() => handleUpdateAvatar(selectedAvatar)} />
                                    )}
                                </div>
                            </div>


                            {showInputs.avatar && (
                                <div>
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


                                </div>
                            )}


                        </article>

                        <div className={`user-settings__updates__infos ${showInputs.avatar ? 'mobile-margin' : ''}`}>


                            {/* Updates Email */}
                            <article className="user-settings__updates__infos__email">

                                <h3>Email :</h3> <span className="userItems">{userData[0]?.pseudo}

                                    <img
                                        onClick={() => handleToggleInput("email")}
                                        src={showInputs.email ? closeIcon : penIcon} alt='modify icon' />   </span>


                                {showInputs.email && (
                                    <>


                                        <div className="user-settings__updates__infos__email__inputs">
                                            <Input
                                                type='email'
                                                onChange={(e) => setEmailValue(e.target.value)}
                                                value={emailValue}
                                                label={''}
                                            />

                                            <img
                                                onClick={() => handleUpdateEmail(emailValue)}
                                                className='icon' src={okIcon} />

                                        </div>
                                    </>
                                )}

                            </article>

                            {/* Updates Pseudo */}

                            <article className="user-settings__updates__infos__pseudo">
                                <h3>Pseudo :</h3> <span className="userItems">{userData[0]?.pseudo}

                                    <img
                                        onClick={() => handleToggleInput("pseudo")}
                                        src={showInputs.pseudo ? closeIcon : penIcon} alt='modify icon' />  </span>



                                {showInputs.pseudo && (
                                    <>


                                        <div className="user-settings__updates__infos__pseudo__inputs">
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
                            </article>




                            {/* Updates Password */}
                            <article className="user-settings__updates__infos__pass">
                                <h3>Pseudo :</h3> <span className="userItems"> It's a secret 🤫

                                    <img
                                        onClick={() => handleToggleInput("password")}
                                        src={showInputs.password ? closeIcon : penIcon} alt='modify icon' /> </span>



                                {showInputs.password && (
                                    <>


                                        <div className="user-settings__updates__infos__pass__inputs">
                                            <Input
                                                type='password'
                                                onChange={(e) => setPasswordValue(e.target.value)}
                                                value={passwordValue}
                                            />

                                            <img
                                                onClick={() => handleUpdatePassword(passwordValue)}
                                                className='icon' src={okIcon} />

                                        </div>
                                    </>
                                )}
                            </article>

                        </div>


                        {/* Account */}

                        <article className="user-settings__account">
                            <h2>Account Settings</h2>
                            <div className="user-settings__account__controls">

                                <Button text='deconnexion'
                                    icon={offIcon}
                                    onClick={() => setLogOutModal(true)} />
                                <Button
                                    text='delete your account'
                                    icon={trashIcon} />
                            </div>
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

            </section >

            <Footer />


        </>
    )
}
export default UserPage