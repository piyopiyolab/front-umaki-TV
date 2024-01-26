import './App.scss'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import LogInPage from '../../Layouts/LogInPage/LogInPage';

function App() {
    return (
        <div className="app">
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/log-in"
                            element={
                                <>
                                    <LogInPage />
                                </>
                            }
                        />
                        <Route
                            path="/sign-up"
                            element={
                                <>
                                    <h1>Sign-up, and start track your viewing progress !</h1>
                                    <SignUp />
                                </>
                            }
                        />
                    </Routes>
                </BrowserRouter>

            </div>
        </div>
    );
}


export default App;