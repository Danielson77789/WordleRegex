import './login.css'
import { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function login() {
        console.log("1")
        axios.post('http://127.0.0.1:3000/login', {
            username: username,
            password: password
          })
          .then(function (response) {
            Cookies.set('user_id', response.data.userFound.id, { expires: 1 });
            Cookies.set('logged_in', true, {expires: 1000})
            console.log(response.data.userFound.id);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleLogout = () => {
        Cookies.remove('session_id');
        setIsLoggedIn(false);
    };

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

            <button className='sub-button' onClick={login}>Sign in</button>
        </div>
    )
}

export default Login;