import '../stylesheets/App.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Login } from './Login.jsx'

async function login(navigate) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const data = JSON.stringify({"username": username, "password": password})
  let response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  })
  response = await response.json()
  if (response.login === true) {
    navigate('/game');
  } else if (!document.getElementById('loginHelper')){
    let loginHelper = document.getElementById('loginHelper');
    loginHelper.innerText = response.login;
  } else {
    loginHelper.innerText = response.login;
  }
}

async function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const loginHelper = document.getElementById('loginHelper')
  // determine if a password is valid/strong
  const validPassword = (password) => {
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
    return hasNumber ? 'valid' : res; 
  }
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
  let navigate = useNavigate();
  const [toggleState, setToggleState] = useState('login')
  return (
    <div className="App">
      <main>
        <h1 className='headline'>Idle Game Title</h1>
        <div className='container' style={toggleState === 'signup' ? {height: "25rem"} : {height: '20rem'}}>
          <label id='toggleSwitch' onClick={() => {
            if (toggleState === 'login') {setToggleState('signup')} 
            else {setToggleState('login')}
            }
          }>
            <span>Login</span>
            <span>Signup</span>
          </label>
          <Login navigate={navigate} toggle={toggleState} signup={signup} login={login}></Login>
        </div>
      </main>
    </div>
  )
}

export default App
