import '../stylesheets/App.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Login } from './Login.jsx'

export function deleteAllCookies() {
  const cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

deleteAllCookies();


async function login(navigate) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const data = JSON.stringify({"username": username, "password": password})
  let loginHelper = document.getElementById('loginHelper');
  if (!username && password) {
    loginHelper.innerText = "Please enter a username"
  } else if (username && !password) {
    loginHelper.innerText = "Please enter your password"
  } else if (!username && !password) {
    loginHelper.innerText = "Please enter your information"
  } else {
    let response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
    })
    response = await response.json()
    if (response.login === true) {
      document.cookie = `username=${username}`
      navigate('/game');
    } else {
      loginHelper.innerText = response.login;
    }
  }
}

function validPassword(password) {
  let res;
  const nums = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true
  }
  // test for password length
  if (password.length < 8) return res = 'Password must be 8 or more characters'
  else if (password.length > 39) return res = 'Password must be less than 40 characters'
  // test for password has upper and lowercase characters
  else if (password === password.toLowerCase() || password === password.toUpperCase()) {
    return res = 'Password should contain lower and uppercase letters'
  }
  // test for password has a number in it
  let hasNumber = false;
  for (let i in password) {
    if (nums[password[i]]) {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) res = 'Password should contain a number'
  return 'valid';
}

async function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const loginHelper = document.getElementById('loginHelper')

  if (!username || !password || !confirmPassword) {
    loginHelper.innerText = 'Please fill out the required fields'
    return
  }
  const passwordValidityResult = validPassword(password);
  if (passwordValidityResult !== 'valid') {
    loginHelper.innerText = passwordValidityResult;
  } else if (passwordValidityResult === 'valid' && password !== confirmPassword) {
    loginHelper.innerText = 'Passwords do not match'
  } else {
    const data = JSON.stringify({"username": username, "password": password})
    let response = await fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
    })
    response = await response.json()
    loginHelper.innerText = response.signup;
  }
}


function App() {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState('login')

  return (
    <div className="App">
      <main>
        <h1 className='headline'>Idle Game Title</h1>
        <div className='container'>
          <label id='toggleSwitch'>
            <input type='checkbox' onClick={() => {
              if (toggleState === 'login') {setToggleState('signup')} 
              else {setToggleState('login')}}}>
            </input>
            <span className='slider'>
              <span id='loginText'>Login</span>
              <span id='signupText'>Signup</span>
            </span>
          </label>
          <Login navigate={navigate} toggle={toggleState} signup={signup} login={login}></Login>
        </div>
      </main>
    </div>
  )
}

export default App
