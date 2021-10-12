import './Login.css'
import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, signInUsignTwitter } = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'

    // console.log('came from', location.state?.from)

    const history = useHistory()

    const handleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log('came from', redirect_uri)
                history.push(redirect_uri)
            })
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="login-form">
            <div>
                <h4>Please login</h4>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Your email" {...register("email", { required: true })} />
                    <br />
                    <input defaultValue="" {...register("password")} />

                    {errors.email && <span>This field is required</span>}
                    <br />
                    <input type="submit" />

                </form>
                <br />
                <div>---------or----------</div>
                <Button
                    onClick={handleSignIn}
                    variant="contained"
                    color="primary">
                    Google Sign In
                </Button>
                <br />
                <br />
                <Button
                    onClick={signInUsignTwitter}
                    variant="contained" color="secondary">
                    Twitter Sign In
                </Button>
            </div>
        </div>
    );
};

export default Login;