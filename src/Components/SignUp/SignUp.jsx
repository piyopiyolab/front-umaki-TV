import './Signup.scss'
import Button from "../Button/Button";
import Input from "../Input/Input";
import { signUpThunk } from '../../redux/thunk/post.signup.thunk';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes.constants';
import ErrorContent from '../ErrorContent/ErrorContent';



function SignUp() {

    const [form, setForm] = useState({
        email: "",
        pseudo: "",
        avatar: "",
        password: "",
        confirmPass: "",

    })

    const { user_id, loggedIn, error } = useSelector(states => states.userSlice);


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
    const [showAvatar, setShowAvatar] = useState(false);

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

        const token = localStorage.getItem('accessToken');

        if (user_id) {
            navigate(APP_ROUTES.HOME, { replace: true });

        } else if (token && !user_id) {
            console.log(' token expired/invalid, please log-in')
        }
        else {
            console.log('no user_id, no token, please sign-up')
        }

    }, [user_id]);


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
                        setShowAvatar(!showAvatar);
                    }}
                    value={form.avatar} />

                {showAvatar ? (
                    <div className='avatar-grid'>
                        {avatarImages.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                                className={`avatar-grid-item ${selectedAvatar === avatar ? "selected" : ""}`}
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