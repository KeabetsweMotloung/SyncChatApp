import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import './LoginAndSignup.css';

function LoginAndSignup() {

 const [action, setAction] = useState("Sign Up");
  return (

    <div className='SyncContainer'>
      <div className='nav'>
        <p>Sync Chat</p>
        </div>


       <div className='formContainer'>
            <div className='header'>
              <div className='text'>{action}</div>
              <div className='underline'></div>
            </div>


      <div className='inputs'>
        <div className='name'>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <input type="text" placeholder='Enter Your name' />
        </div>
        <div className='username'>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <input type="text" placeholder='Enter Your Username' />
        </div>
        <div className='password'>
          <FontAwesomeIcon icon={faKey} className='icon' />
          <input type="password" placeholder='Enter Your Password'/>
        </div>
        {action==="Login"?<div></div>:<div className='validatePassword'>
                                                  <FontAwesomeIcon icon={faKey} className='icon' />
                                                  <input type="password" placeholder='Re-Enter Your Password'/>
                                                </div>}

      </div>

      {action ==="Sign Up"?<div></div>: <div className='forgotPassword'> Forgot Password? <span>Reset Password</span></div>
}



      <div className='submitContainer'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
</div>

  );
}

export default LoginAndSignup;
