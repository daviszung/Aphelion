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
  console.log(username, password)
  console.log('signup')
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
            if (toggleState === 'login') {
              setToggleState('signup')
              } else {
                setToggleState('login')
              }
            }
          }>
            <span>Login</span>
            <span>Signup</span>
          </label>
          <Login login={login} navigate={navigate} toggle={toggleState} signup={signup}></Login>
        </div>
      </main>
    </div>
  )
}

export default App
