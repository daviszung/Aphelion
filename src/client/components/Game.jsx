import '../stylesheets/Game.css'
import { useState, useEffect, useReducer, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAllCookies } from './App.jsx'

// Components
import { Header } from './Header.jsx'
import { Woodcutting } from './skills/Woodcutting.jsx'
import { Fishing } from './skills/Fishing'

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

async function updateUserInDB (body) {
  const data = await fetch('http://localhost:3000/api/updateUser', {
    method: "PATCH",
    body: body,
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (data['status'] !== 200) {
    throw new Error()
  }
  return;
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'Initial':
      return {...state, userObj: action.obj}
    case 'update':
      return {...state, userObj: action.updatedObj}
    default:
      throw new Error()
  } 
}


function Game() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const username = checkIfLoggedIn();
    return username;
  });
  const [state, dispatch] = useReducer(reducer, {})
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [timerStart, setTimerStart] = useState(null);

  // functions
  function displaySkillMenu(selected) {
    switch(selected){
      case null:
        return <div id='noSelectedSkill'>No selected Skill</div>
      case 'woodcutting':
        return <Woodcutting state={state} dispatch={dispatch} />;
      case 'fishing':
        return <Fishing/>;
      case 'firemaking':
        return <Firemaking/>;
      case 'cooking':
        return <Cooking/>;
      default:
        throw new Error()
    }
  }

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
    dispatch({type: 'Initial', obj: response.userObject}) 
    return;
  }
  
  // Effects
  useEffect(() => {
    getUserObject()
  }, []);

  // check if user is logged in
  useEffect(() => {
    if (!document.cookie) {
      navigate('/')
    }
    setUser(checkIfLoggedIn())
    if(!user){
      navigate('/')
    }
  }, [document.cookie, user]);

  // autosave timer saves every x seconds, resets timer when changing skill menu
  useEffect(() => {
    if (state && state["userObj"]) {
      const timer = setInterval(() => {
        const body = JSON.stringify(state.userObj)
        updateUserInDB(body)
      }, 20000)
      return () => clearInterval(timer);
    }
  }, [selectedSkill]);

  return (
    <div className="Game">
      <Header user={user} deleteAllCookies={deleteAllCookies} navigate={navigate}></Header>
      <main>
        <div className='mainGrid'>
          <div className='sidebar'>
            <div className='sidebarItem'><button className='skillBtn'><p>Shop</p>{state.userObj ? state.userObj.gold + 'g' : null}</button></div>
            <div className='sidebarItem'><button className='skillBtn'><p>Bank</p>{state.userObj ? Object.keys(state.userObj.bankSpace).length + '/' + state.userObj.maxBankSpace : null}</button></div>
            <ul className='skillList'>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('woodcutting')}}><p>Woodcutting</p>{state.userObj && state.userObj.levels ? state.userObj.levels.woodcutting.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('fishing')}}><p>Fishing</p>{state.userObj && state.userObj.levels ? state.userObj.levels.fishing.current + '/99': null}</button></li>
              {/* <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('firemaking')}}><p>Firemaking</p>{state.userObj && state.userObj.levels ?  state.userObj.levels.firemaking.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('cooking')}}><p>Cooking</p>{state.userObj && state.userObj.levels ?  state.userObj.levels.cooking.current + '/99': null}</button></li> */}
            </ul>
          </div>
          {displaySkillMenu(selectedSkill)}
        </div>
      </main>
    </div>
  )
}

export default Game;
