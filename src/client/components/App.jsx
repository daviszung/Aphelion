import '../stylesheets/App.css'
import { useNavigate } from 'react-router-dom'

async function submit(navigate) {
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
    let loginHelper = document.createElement('p');
    loginHelper.id = 'loginHelper';
    loginHelper.innerText = response.login;
    document.getElementById('loginForm').append(loginHelper)
  } else {
    loginHelper.innerText = response.login;
  }
}

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <main>
        <h1 className='headline'>Idle Game Title</h1>
        <div  className='container'>
        <div  id='loginForm' className='loginForm' >
          <input id='username' placeholder='username' type='text' name='username' autoComplete='off' required='required'></input>
          <input id='password' placeholder='password' type='password' name='password' autoComplete='off' required='required'></input>
          <button id='loginBtn' type='submit' className='loginButton' onClick={() => submit(navigate)}>
            Login
          </button>
        </div>
        </div>
      </main>
    </div>
  )
}

export default App
