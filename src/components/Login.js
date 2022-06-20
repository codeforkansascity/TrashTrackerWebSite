import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login-main'>
            <h1 className='login-title'>Welcome to Trash Tracker!</h1>
            <form className='login-form'>
                <label className='login-label'>
                    Email:
                    <input type="text" name="email" className='login-input'/>
                </label>
                <br />
                <label className='login-label'>
                    Password:
                    <input type="password" name="password" className='login-input'/>
                </label>
                <br />
                <Link to="/home"><input type="submit" value="Log In" className='login-button'/></Link>
            </form>
        </div>
    );
}

export default Login;