import './login.css'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        console.log(username)
        console.log(password)
    }

    return(
        <div className='login-card'>
            <h1 className='login-header'>Login Portal</h1>

            <div className='input-container'>
                <h2 className='input-header'>Username: </h2>
                <input className='username-field' type="text" name="name" size="10" onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className='input-container'>
                <h2 className='input-header'>Password: </h2>
                <input className='username-field' type="text" name="name" size="10" onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className='sub-button' onClick={login}>Test</button>
        </div>
    )
}

export default Login;