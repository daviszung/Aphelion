import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <h1 className='headline'>Idle Game Title</h1>
        <div className='container'>
        <form action='http://localhost:3000/api/login' method='post' id='login' className='loginForm'>
          <input id='username' placeholder='username' type='text' name='username' autoComplete='off'></input>
          <input id='password' placeholder='password' type='password' name='password' autoComplete='off'></input>
          <button id='loginBtn' type='submit' className='loginButton'>
            Login
          </button>
        </form>
        </div>
      </main>
    </div>
  )
}

export default App
