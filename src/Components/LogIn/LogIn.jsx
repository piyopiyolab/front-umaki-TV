import { logInThunk } from "../../redux/thunk/thunk.post.login"
import { useDispatch } from 'react-redux'
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './LogIn.scss';



function LogIn() {


    const [form, setForm] = useState({
        email: "",
        password: "",

    })


    const dispatch = useDispatch();

    //Function @params event ==> Sending Form
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(logInThunk(form))


    }


    //Function @params value, inputName (obj form) ==> onChange
    const handleChange = (value, inputName) => {
        setForm({
            ...form,
            [inputName]: value,
        })

    }


    return (
        <form className="login__form" onSubmit={handleSubmit}>


            <Input id={"email"}
                label="Email"
                type={"email"}
                value={form.email}
                required
                onChange={(e) => handleChange(e.target.value, "email")} />

            <Input id={"password"}
                label="Password"
                type={"password"}
                className="kikoo"
                value={form.password}
                required
                onChange={(e) => handleChange(e.target.value, "password")} />



            <Button
                type={"submit"}
                text={"Log-In"}
            />

            <p className="text-center m-2">You don't have an account ? <a href="/sign-up">Sign-up</a></p>
        </form>
    )
}
export default LogIn