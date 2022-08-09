export function Login (props) {
  const navigate = props.navigate;
  if (props.toggle === 'login') {
    return (
      <div id='loginForm' className='loginForm' >
        <input id='username' placeholder='username' type='text' name='username' autoComplete='off' required='required'></input>
        <input id='password' placeholder='password' type='password' name='password' autoComplete='off' required='required'></input>
        <button id='loginBtn' type='submit' className='loginButton' onClick={() => props.login(navigate)}>
          Login
        </button>
        <p id='loginHelper'></p>
      </div>
    )
  } else if (props.toggle === 'signup') {
    return (
      <div id='loginForm' className='loginForm' >
        <input id='username' placeholder='username' type='text' autoComplete='off'></input>
        <input id='password' placeholder='password' type='password' autoComplete='off'></input>
        <input id='confirmPassword' placeholder='confirm password' type='password' autoComplete='off'></input>
        <button id='loginBtn' type='submit' className='loginButton' onClick={props.signup}>
          Create Account
        </button>
        <p id='loginHelper'></p>
      </div>
    )
  }
}