import '../stylesheets/Game.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAllCookies } from './App.jsx'


function checkIfLoggedIn() {
  if (!document.cookie) {
    return false;
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
  return false;
}


function Game() {
  const navigate = useNavigate();
  const date = new Date();
  const [user, setUser] = useState(() => {
    const username = checkIfLoggedIn();
    return username;
  });
  const [userObj, setUserObj] = useState( async () => {
    const myObj = await getUserObject()
    return myObj;
  });
  const [time, setTime] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState('woodcutting');


  async function getUserObject() {
    const data = JSON.stringify({"username": user});
    
    let response = await fetch('http://localhost:3000/api/getUser', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  })
    response = await response.json()
    setUserObj(response["userObject"])
    return response;
  }
  

  // check if user is logged in
  useEffect(() => {
    setUser(checkIfLoggedIn())
    if(!user){
      navigate('/')
    }
  }, [document.cookie, user])

  // run a clock that updates every second
  useEffect(() => {
    setTimeout(() => {setTime(date.toLocaleTimeString())}, 1001);
  },[time])

  return (
    <div className="Game">
      <header>
        <h1 className='gameTitle'>Idle Game Title</h1>
        <nav className='navbar'>
          <ul className='navlist'>
            <li>{user}</li>
            <button className='logoutBtn' onClick={deleteAllCookies}>Logout</button>
          </ul>
        </nav>
      </header>
      <main>
        <div className='mainGrid'>
          <div className='sidebar'>
            <ul className='skillList'>
              <li>{user}</li>
              <li>Fishing</li>
              <li>Woodcutting</li>
              <li>Mining</li>
              <li>hello ?{userObj.username}</li>
            </ul>
          </div>
          <div>{userObj ? userObj.password : "frog"}</div>
        </div>
      </main>
    </div>
  )
}

export default Game;