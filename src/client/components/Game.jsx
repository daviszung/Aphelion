import '../stylesheets/Game.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAllCookies } from './App.jsx'

// Components
import { Header } from './Header.jsx'
import { Woodcutting } from './Woodcutting.jsx'
import { Fishing } from './Fishing'

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
    if (!document.cookie) {
      navigate('/')
    }
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
      <Header user={user}></Header>
      <main>
        <div className='mainGrid'>
          <div className='sidebar'>
            <div className='sidebarItem'><button className='skillBtn'><p>Shop</p>{userObj.gold + 'g'}</button></div>
            <div className='sidebarItem'><button className='skillBtn'><p>Bank</p>{userObj.bankSpace + '/' + userObj.maxBankSpace}</button></div>
            <ul className='skillList'>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('woodcutting')}}><p>Woodcutting</p>{userObj && userObj.levels ?  userObj.levels.woodcutting.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('fishing')}}><p>Fishing</p>{userObj && userObj.levels ?  userObj.levels.fishing.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('firemaking')}}><p>Firemaking</p>{userObj && userObj.levels ?  userObj.levels.firemaking.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('cooking')}}><p>Cooking</p>{userObj && userObj.levels ?  userObj.levels.cooking.current + '/99': null}</button></li>

            </ul>
          </div>
          {selectedSkill === 'woodcutting' ? <Woodcutting/> : selectedSkill === 'fishing' ? <Fishing/> : <div>No skill selected</div>}
        </div>
      </main>
    </div>
  )
}

export default Game;