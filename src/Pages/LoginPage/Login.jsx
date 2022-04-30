import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './LoginStyles.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const isLogged = () => {
        let token = Cookies.get('token');
        return token ? true : false;
    }
    const doLogin = () => {
        axios.post('https://books.ioasys.com.br/api/v1/auth/sign-in', {
            username: username,
            password: password
        }).then((res) => {
            if (res.data.success) {
                Cookies.set('token', res.data.token);
                window.location.href = '/';
            } else {
                setError(res.data.message);
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await doLogin(username, password);
        console.log(e)
        if(json.error){
            setError(json.error);
            console(json)
        }else{
            window.location.href = '/home'
        }
    }
    return (
        <div className='login-container'>
            <div style={{ disply: 'flex', alignItems: 'flex-start', padding: '16px' }}>
                <h1>ioasys <span>Books</span></h1>
                <div className='input-container'>
                    <h5>Email</h5>
                    <input type="email" className='login-box' value={username} required onChange={(event) => {
                        setUsername(event.target.value);
                    }} />
                </div>
                <div className='input-container'>
                    <h5 style={{ width: '50px' }}>Senha</h5>
                    <input type="password" className='login-box' value={password} required onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                    <button className='login-button' onClick={handleSubmit}>Entrar</button>
                </div>
            </div>
        </div>
    )
}