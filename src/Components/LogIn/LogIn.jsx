import { logInThunk } from '../../redux/thunk/post.login.thunk';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './LogIn.scss';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from "../../constants/routes.constants";
import { addLoading } from "../../redux/reducers/userSlice.reducer";
import ErrorContent from "../ErrorContent/ErrorContent";

function LogIn() {

    const [form, setForm] = useState({
        email: "",
        password: "",

    })

    const { data, loading, error, loggedIn } = useSelector(states => states.userSlice);
    const navigate = useNavigate();
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

    useEffect(() => {

    }, [error])

    // Redirection favorite
    useEffect(() => {

        const token = localStorage.getItem('accessToken');
        if (token) {
            navigate(APP_ROUTES.FAVORITE, { replace: true });

        }

    }, [loggedIn]);


    return (

        <>

            {error && (
                <>
                    <ErrorContent type='failedLog' />

                </>
            )}


            <form className="login__form" onSubmit={handleSubmit}>


                <Input id={"email"}
                    label="Email"
                    type={"email"}
                    value={form.email}
                    className={error ? 'errorLog' : ''}
                    required
                    onChange={(e) => handleChange(e.target.value, "email")} />

                <Input id={"password"}
                    label="Password"
                    type={"password"}
                    value={form.password}
                    className={error ? 'errorLog' : ''}
                    required
                    onChange={(e) => handleChange(e.target.value, "password")} />



                <Button
                    type={"submit"}
                    text={"Log-In"}
                />

                <p className="text-center m-2">You don't have an account ? <a href={APP_ROUTES.SIGN_UP}>Sign-up</a></p>
            </form>
        </>

    )
}
export default LogIn