import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './login'
import Game from './game'

const RouteGuard = ({ children }) => {
    // Check if a specific cookie exists
    const isAuthenticated = Cookies.get('user_id'); // Assume 'userToken' is your cookie name

    // If the cookie is set, render the <Game> component, else render <Login>
    return isAuthenticated ? <Game /> : <Login />;
};

export default RouteGuard;