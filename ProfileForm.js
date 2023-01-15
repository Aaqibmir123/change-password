import { useContext, useRef } from 'react';
import AuthContext from '../../Context/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const userIdtoken=useContext(AuthContext);

  const newpassworduser=useRef();
  const SubmitHandler=(e)=>{
    e.preventDefault();
    const enteredPassword = newpassworduser.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB99sjqsYiisTvfmZva93G51YFHvdyoJUg',{
      method:'POST',
      body:JSON.stringify({
        idToken:userIdtoken,
        password:enteredPassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    });


  }
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'  ref={newpassworduser}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
