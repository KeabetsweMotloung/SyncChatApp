import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import './LoginAndSignup.css';
import axios from 'axios'; // Import axios for making HTTP requests

function LoginAndSignup() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [action, setAction] = useState("Sign Up"); // Initial state for action
     const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/register', {
                name,
                username,
                password
            });
            console.log(response.data.message);
            // Handle success (e.g., show a success message)
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
              <div className='text'>{action}</div>
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

      {action ==="Sign Up"?<div></div>: <div className='forgotPassword'> Forgot Password? <span>Reset Password</span></div>
}



      <div className='submitContainer'>
                              <button type="submit" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</button>
                              <button type="submit" className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
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
        </div>
    );
}
export default LoginAndSignup;