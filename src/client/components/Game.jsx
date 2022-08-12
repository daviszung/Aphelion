import '../stylesheets/Game.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function checkIfLoggedIn(navigate) {
  if (!document.cookie) {
    navigate('/')
  }
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf('username=') == 0) {
      return c.substring('username='.length, c.length);
    }
  }
  return navigate('/');
}

function Game() {
  const navigate = useNavigate();
  const date = new Date();
  const [user, setUser] = useState(null); 
  const [time, setTime] = useState(null);

  // check if user is logged in on first render
  useEffect(() => {
    setUser(checkIfLoggedIn(navigate))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(date.toLocaleTimeString())
    }, 1001);
    return () => clearInterval(interval);
  },[time])

  return (
    <div className="Game">
      <header>
        <h1 className='gameTitle'>Idle Game Title</h1>
        <nav className='navbar'>
          <ul className='navlist'>
            <li>{user}</li>
            <button className='logoutBtn'>Logout</button>
          </ul>
        </nav>
      </header>
      <main>
        <div>Date: {date.toDateString()}</div>
        <div>Time: {time}</div>
      </main>
    </div>
  )
}

export default Game;