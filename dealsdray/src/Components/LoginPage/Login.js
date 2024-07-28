import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
            <div className='LoginMain'>
                <h1 className='LoginHeading'>Login Page</h1>
                <form className='LoginForm'>
                    <input type='text' className='LoginFormInput' placeholder='Enter Username' /> <br />
                    <input type='password' className='LoginFormInput' placeholder='Enter Password' /> <br />
                    <button className='LoginButton'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
