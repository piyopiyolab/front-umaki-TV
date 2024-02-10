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
import { clearAccessToken } from "../../utils/clearToken";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes.constants";
import Input from "../../Components/Input/Input";

function UserPage() {

    const { data } = useSelector(states => states.userSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken')

        if (token) {
            dispatch(getUserInfos())
            console.log('Profile', data)
        } else {
            // navigate(APP_ROUTES.HOME)
            console.log('token unfined')
        }
    }, [])

    // Avatar 

    const [selectedAvatar, setSelectedAvatar] = useState("");
    const avatarImages = [
        '/images/avatarbis/monkey-avatar-1.png',
        '/images/avatarbis/monkey-avatar-2.png',
        '/images/avatarbis/monkey-avatar-3.png',
        '/images/avatarbis/monkey-avatar-4.png',
        '/images/avatarbis/monkey-avatar-5.png',
        '/images/avatarbis/monkey-avatar-6.png',
    ];
    const [showAvatar, setShowAvatar] = useState(false);

    const handleAvatarClick = (itemName) => {
        setSelectedAvatar(itemName);
    };

    // Deconnexion button => Clear Local Storage
    const handleDeconnexion = () => {
        console.log('deconnexion')
        clearAccessToken();
    };

    // Modifiy userInfos 
    const [showInput, setShowInputs] = useState({
        pseudo: false,
        email: false,
        avatar: false,
    })


    const [form, setForm] = useState({
        avatar: "",
        email: "",
        pseudo: "",
    })

    const handleToggleInput = (inputName) => {
        setShowInputs(prevState => ({
            ...prevState,
            [inputName]: !prevState[inputName],
        }));
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
                <h1>Welcome to your profile {data ? data[0].pseudo : ''}</h1>

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
                                    <div className='signup__form__avatar__grid'>
                                        {avatarImages.map((avatar, index) => (
                                            <img
                                                key={index}
                                                src={avatar}
                                                alt={`Avatar ${index + 1}`}
                                                className={`signup__form__avatar__grid__item ${selectedAvatar === avatar ? "selected" : ""}`}
                                                onClick={() => {
                                                    handleChange(avatar, "avatar")
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
                                        src={penIcon} alt='modify icon' /></p>

                                {showInput.pseudo && (
                                    <Input />
                                )}
                                <p><span>Email : </span> {data[0].email}
                                    <img
                                        onClick={() => handleToggleInput("email")}
                                        src={penIcon} alt='modify icon' /></p>
                                {showInput.email && (
                                    <Input />
                                )}
                            </div>
                        </article>
                        <h2>Account Settings</h2>
                        <article className="user-settings__account-controls">

                            <Button text='deconnexion'
                                icon={offIcon}
                                onClick={handleDeconnexion} />
                            <Button
                                text='delete your account'
                                icon={trashIcon} />
                        </article>
                    </>
                )}
            </section>

            <Footer />


        </>
    )
}
export default UserPage