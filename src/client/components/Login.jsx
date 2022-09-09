import style from '../stylesheets/App.module.css'

export function Login (props) {
  const navigate = props.navigate;
  if (props.toggle === 'login') {
    return (
      <div id='loginForm' className={style.loginForm} >
        <input id='username' className={style.username} placeholder='username' type='text' autoComplete='off'></input>
        <input id='password' className={style.password} placeholder='password' type='password' autoComplete='off'></input>
        <button id='loginBtn' type='submit' className={style.loginButton} onClick={() => props.login(navigate)}>
          Login
        </button>
        <p id='loginHelper' className={style.loginHelper}></p>
      </div>
    )
  } else if (props.toggle === 'signup') {
    return (
      <div id='loginForm' className={style.loginForm}>
        <input id='username' className={style.username} placeholder='username' type='text' autoComplete='off'></input>
        <input id='password' className={style.password} placeholder='password' type='password' autoComplete='off'></input>
        <input id='confirmPassword' className={style.confirmPassword} placeholder='confirm password' type='password' autoComplete='off'></input>
        <button id='loginBtn' type='submit' className={style.loginButton} onClick={props.signup}>
          Create Account
        </button>
        <p id='loginHelper' className={style.loginHelper}></p>
      </div>
    )
  }
}