import './App.scss'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from '../../Layouts/LogInPage';
import SignUpPage from '../../Layouts/SignUpPage';
import HomePage from '../../Layouts/HomePage';

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
                                    <SignUpPage />
                                </>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <>
                                    <HomePage />
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