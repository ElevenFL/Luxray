import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from './components/NavBar/Navbar.jsx';
import AppRoutes from './routes/Routes.jsx';


function App() {

    return (
        <>
        <Router>
            <Navbar/>
            <AppRoutes/>
        </Router>
        </>
    )
}

export default App