import '../stylesheets/App.css'

// function App() {
//   return (
//     <div className="App">
//       <main>
//         <h1 className='headline'>Idle Game Title</h1>
//         <div className='container'>
//         <form action='http://localhost:3000/api/login' method='post' id='login' className='loginForm' target='_top'>
//           <input id='username' placeholder='username' type='text' name='username' autoComplete='off' required='required'></input>
//           <input id='password' placeholder='password' type='password' name='password' autoComplete='off' required='required'></input>
//           <button id='loginBtn' type='submit' className='loginButton'>
//             Login
//           </button>
//         </form>
//         </div>
//       </main>
//     </div>
//   )
// }


async function submit() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const data = JSON.stringify({"username": username, "password": password})
  console.log(data)
  let response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  })
  response = await response.json()
  console.log(response.login)
  if (response.login === true) {
    console.log('redirect')
  } else if (!document.getElementById('loginHelper')){
    console.log('hi')
    let loginHelper = document.createElement('p');
    loginHelper.id = 'loginHelper';
    loginHelper.innerText = response.login;
    document.getElementById('loginForm').append(loginHelper)
  } else {
    loginHelper.innerText = response.login;
  }
}

function App() {
  return (
    <div className="App">
      <main>
        <h1 className='headline'>Idle Game Title</h1>
        <div  className='container'>
        <div  id='loginForm' className='loginForm' >
          <input id='username' placeholder='username' type='text' name='username' autoComplete='off' required='required'></input>
          <input id='password' placeholder='password' type='password' name='password' autoComplete='off' required='required'></input>
          <button id='loginBtn' type='submit' className='loginButton' onClick={submit}>
            Login
          </button>
        </div>
        </div>
      </main>
    </div>
  )
}

export default App
