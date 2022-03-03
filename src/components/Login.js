import React, {useState} from 'react';
import '../CSS/Style.scss';
import logo from '../Images/logo.png'
import validator from 'validator';



const Login = () => {
    const [emailError, setEmailError] = useState('')
    const check = (e) => {
        let email = e.target.value;
        if(validator.isEmail(email) ) {
            setEmailError('')
        } else {
            setEmailError('Please enter a valid email')
        }
    }


    const link = {
        url: '',
        regisLink: ''
    }


    return (
        <div className='container'>
            <div className='form-container'>
                <form className='form'>
                    <br></br>
                    <div className='logo'>
                        <img src={logo}  alt={'Capstone Logo'}/>
                        <div className='line' ></div>
                    </div>
                    <br></br>
                    <br></br>
                    <input type='email'
                           name='email'
                           placeholder='Email'
                           id='email'
                           onChange={(e) => check(e)}
                            />
                    <br></br>

                    <input type='password'
                           name='password'
                           placeholder = 'Password'
                           id='password'
                            />
                    <br></br>
                    <br></br>
                    <a href={link.url} >Forgot Password?</a>
                    <br></br>
                    <button type='submit'  id='login' >Log In</button>
                    {emailError }

                    <br></br>
                    <h6>New User? <a id='register' href={link.regisLink}>Register Here</a></h6>
                </form>
            </div>
        </div>
    );
};

export default Login;
