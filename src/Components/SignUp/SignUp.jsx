import './Signup.scss'
import Button from "../Button/Button";
import Input from "../Input/Input";
import { signUpThunk } from "../../redux/thunk/thunk.post.signup"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import avatar1 from '/images/avatar/avatar1.png';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes.constants';

function SignUp() {

    const [form, setForm] = useState({
        email: "",
        pseudo: "",
        avatar: "",
        password: "",
        confirmPass: "",

    })


    const [showAvatar, setShowAvatar] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signUpThunk(form))


    }

    //Function @params value, inputName (obj form) ==> onChange
    const handleChange = (value, inputName) => {
        setForm({
            ...form,
            [inputName]: value,
        })

    }

    // Redirecton
    const handleRedirect = () => {
        navigate(APP_ROUTES.HOME, { replace: true });
    }

    return (
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


            {/* 
            <Input id={"avatar"}
                label="Avatar"
                type={"file"}
                value={form.avatar}
                required
                onChange={(e) => handleChange(e.target.value, "avatar")} /> */}

            <Button
                text="Choose your avatar"
                onClick={(e) => {
                    handleChange(e.target.value, "avatar");
                    setShowAvatar(!showAvatar);
                }}
                value={form.avatar} />

            {showAvatar ? (
                <div className='grid'>
                    <img src={avatar1} alt="" className='grid-item' />

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
                onClick={handleRedirect}
            />

            <p className='text-center m-2'>You already have an account ? <a href="/connexion/log-in">Log-in</a></p>
        </form>
    )
}

export default SignUp