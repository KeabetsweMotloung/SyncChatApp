import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import './LoginAndSignup.css';
import axios from 'axios'; // Import axios for making HTTP requests

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/login', {
            username,
            password
            });
            console.log(response.data.message);
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage(error.response.data.message);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className='SyncContainer'>
            <div className='nav'>
                <p>Sync Chat</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='formContainer'>
                    <div className='header'>
                        <div className='text'>Login</div>
                    </div>

                    <div className='inputs'>
                        <div className='username'>
                            <FontAwesomeIcon icon={faUser} className='icon' />
                            <input type="text" placeholder='Enter Your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className='password'>
                            <FontAwesomeIcon icon={faKey} className='icon' />
                            <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className='submitContainer'>
                        <button type="submit" className="submit">Login</button>
                    </div>
                </div>
            </form>

            {/* Error message pop-up */}
            {errorMessage && (
                <div className="errorMessage">
                    {errorMessage}
                    <button onClick={() => setErrorMessage("Opps, looks like you're not registered yet, Sign Up")}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Login;
