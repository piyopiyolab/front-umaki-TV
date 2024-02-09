import './Signup.scss'
import Button from "../Button/Button";
import Input from "../Input/Input";
import { signUpThunk } from "../../redux/thunk/thunk.post.signup"
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes.constants';
import { isAuth } from '../../utils/isAuth';
import ErrorContent from '../ErrorContent/ErrorContent';



function SignUp() {

    const [form, setForm] = useState({
        email: "",
        pseudo: "",
        avatar: "",
        password: "",
        confirmPass: "",

    })

    const { loggedIn, error } = useSelector(states => states.userSlice);

    const [showAvatar, setShowAvatar] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();



    //Function @params value, inputName (obj form) ==> onChange
    const handleChange = (value, inputName) => {
        setForm({
            ...form,
            [inputName]: value,


        })


    }


    // Avatar
    const avatarImages = [
        '/images/avatarbis/monkey-avatar-1.png',
        '/images/avatarbis/monkey-avatar-2.png',
        '/images/avatarbis/monkey-avatar-3.png',
        '/images/avatarbis/monkey-avatar-4.png',
        '/images/avatarbis/monkey-avatar-5.png',
        '/images/avatarbis/monkey-avatar-6.png',
    ];

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleAvatarClick = (itemName) => {
        setSelectedAvatar(itemName);
    };

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signUpThunk(form))

    }

    // Redirecton Home
    useEffect(() => {
        if (isAuth()) { // Corrected to isAuth()
            navigate(APP_ROUTES.HOME, { replace: true });
        }
    }, [loggedIn]);


    //Error
    useEffect(() => {
    }, [error])

    return (

        <>
            {error && (
                <>
                    <ErrorContent type='errorMDP' />

                </>
            )}


            <form className="signup__form" onSubmit={handleSubmit}>


                <Input id={"email"}
                    label="Email"
                    type={"email"}
                    value={form.email}
                    required
                    onChange={(e) => handleChange(e.target.value, "email")} />

                <Input id={"pseudo"}
                    label="Pseudo"
                    type={"text"}
                    value={form.pseudo}
                    required
                    onChange={(e) => handleChange(e.target.value, "pseudo")} />


                <Button
                    text="Choose your avatar"
                    onClick={(e) => {
                        handleChange(e.target.value, "avatar");
                        setShowAvatar(!showAvatar);
                    }}
                    value={form.avatar} />

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

                <Input id={"password"}
                    label="Password"
                    type={"password"}
                    value={form.password}
                    required
                    onChange={(e) => handleChange(e.target.value, "password")} />

                <Input id={"confirmPass"}
                    label="Confirm password"
                    type={"password"}
                    value={form.confirmPass}
                    required
                    onChange={(e) => handleChange(e.target.value, "confirmPass")} />


                <Button
                    type={"submit"}
                    text={"I Create my account"}

                />

                <p className='text-center m-2'>You already have an account ? <a href={APP_ROUTES.LOG_IN}>Log-in</a></p>
            </form>
        </>
    )
}

export default SignUp