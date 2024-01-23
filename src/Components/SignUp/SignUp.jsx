import './Signup.scss'
import Button from "../Button/Button";
import Input from "../Input/Input";
import { signUpThunk } from "../../redux/thunk/thunk.post.signup"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";

function SignUp() {

    const [form, setForm] = useState({
        email: "",
        pseudo: "",
        avatar: "",
        password: "",
        confirmPass: "",

    })

    //const [loading, setLoading] = useState('false');


    const dispatch = useDispatch();

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

    return (
        <form className="form-connexion" onSubmit={handleSubmit}>


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



            <Input id={"avatar"}
                label="Avatar"
                type={"file"}
                value={form.avatar}
                required
                onChange={(e) => handleChange(e.target.value, "avatar")} />

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
                text={"Log-In"}
            />

            <p>You already have an account ? <a href="">Log-in</a></p>
        </form>
    )
}

export default SignUp