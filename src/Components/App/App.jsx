import './App.scss'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app__card card">
          <BrowserRouter>
            <Routes>
              <Route
                path="/log-in"
                element={
                  <>
                    <h1>Log-in into your account</h1>
                    <LogIn />
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
    </div>
  );
}


export default App;