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
  const [user, setUser] = useState(null); 

  useEffect(() => {
    setUser(checkIfLoggedIn(navigate))
  })

  return (
    <div className="Game">
      <header>
        <nav className='navbar'>
          <div className='headline'>{user}</div>
          <button>Logout</button>
        </nav>
      </header>
      <main>
        <h1 className='headline'>Idle Game Title</h1>
      </main>
    </div>
  )
}

export default Game;