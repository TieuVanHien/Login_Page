import React, {useState} from 'react';
import '../CSS/Style.scss';
import logo from '../Images/logo.png'
import {Button, TextField} from "@mui/material";




const Login = () => {

    const link = {
        url: '',
        regisLink: ''
    }


    return (
        <div className='container'>
            <div className='form-container'>
                <form className='form' method='get'>
                    <br></br>
                    <div className='logo'>
                        <img src={logo}  alt={'Capstone Logo'}/>
                        <div className='line' ></div>
                    </div>
                    <br></br>
                    <br></br>
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        type='email'
                        fullWidth
                    />
                    <br></br>

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                    />
                    <br></br>
                    <br></br>
                    <a href={link.url} >Forgot Password?</a>
                    <br></br>
                    <Button variant="contained" >Log In</Button>


                    <br></br>
                    <h6>New User? <a id='register' href={link.regisLink}>Register Here</a></h6>
                </form>
            </div>
        </div>
    );
};

export default Login;
