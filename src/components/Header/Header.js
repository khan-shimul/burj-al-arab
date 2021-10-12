import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import { Button } from '@material-ui/core';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        {user ?
                            <Button
                                onClick={logOut}
                                style={{ color: 'white' }}>
                                Log Out
                            </Button>
                            :
                            <Link to="/login">Login</Link>}
                    </li>
                    <li>
                        <Link className="btn-book" to="/about">About Us</Link>
                        {user && <small style={{ color: 'white' }}> {user?.displayName}</small>}
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div >
    );
};

export default Header;