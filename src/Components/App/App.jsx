import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from '../../Layouts/LogInPage';
import SignUpPage from '../../Layouts/SignUpPage';
import HomePage from '../../Layouts/HomePage/HomePage';
import FavoritePage from '../../Layouts/FavoritePage/FavoritePage';
import { APP_ROUTES } from '../../constants/routes.constants';
import AnimeDetails from '../../Layouts/AnimeDetailsPage/AnimeDetailsPage';
import ErrorContent from '../ErrorContent/ErrorContent';
import ErrorPage from '../../Layouts/ErrorPage/ErrorPage';


function App() {
    return (
        <div className="app">
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={APP_ROUTES.LOG_IN}
                            element={
                                <>

                                    <LogInPage />
                                </>
                            }
                        />
                        <Route
                            path={APP_ROUTES.SIGN_UP}
                            element={
                                <>
                                    <SignUpPage />
                                </>
                            }
                        />
                        <Route
                            path={APP_ROUTES.HOME}
                            element={
                                <>
                                    <HomePage />
                                </>
                            }
                        />
                        <Route
                            path={APP_ROUTES.FAVORITE}
                            element={
                                <>
                                    <FavoritePage />
                                </>
                            }
                        />
                        <Route
                            path={`${APP_ROUTES.ANIME_DETAILS}/:animeID`}
                            element={
                                <>
                                    <AnimeDetails />
                                </>
                            }
                        />
                        <Route
                            path={"*"}
                            element={

                                <ErrorPage />

                            }
                        />
                    </Routes>
                </BrowserRouter>

            </div>
        </div>
    );
}


export default App;