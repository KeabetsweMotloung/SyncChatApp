import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import './LoginAndSignup.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link, useNavigate } from 'react-router-dom';



function Signup() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/register', {
                name,
                username,
                password
            });
            console.log(response.data.message);
            // Handle success
            navigate('/main-container');

        } catch (error) {
            console.error('Error registering user:', error);
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
                        <div className='text'>Sign Up</div>
                    </div>

                    <div className='inputs'>
                        <div className='name'>
                            <FontAwesomeIcon icon={faUser} className='icon' />
                            <input type="text" placeholder='Enter Your name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

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
                        <button type="submit" className="submit">Sign Up</button>
                    </div>
                </div>
            </form>

            {/* Error message pop-up */}
            {errorMessage && (
                <div className="errorMessage">
                    {errorMessage}
                    <button onClick={() => setErrorMessage("Opps, looks like you're already a registered user, Login")}>Close</button>
                </div>
            )}

            <div className='routeToLogin'>
            <p>Already have an account?</p>
            <Link to="/login"><span>Login</span></Link>
        </div>
        </div>
    );
}

export default Signup;
