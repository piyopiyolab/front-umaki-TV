import './App.scss'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from '../../Layouts/LogInPage';
import SignUpPage from '../../Layouts/SignUpPage';
import HomePage from '../../Layouts/HomePage/HomePage';
import FavoritePage from '../../Layouts/FavoritePage/FavoritePage';

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
                        <Route
                            path="/favorite"
                            element={
                                <>
                                    <FavoritePage />
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