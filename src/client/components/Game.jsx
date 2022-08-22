import '../stylesheets/Game.css'
import { useState, useEffect, useReducer, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAllCookies } from './App.jsx'
import { actionTimeValues } from '../tables.jsx'
import { cutWood } from '../actions.jsx'
import { Combat } from './Combat.jsx'


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
  const [selectedAction, setSelectedAction] = useState(null);

  // functions
  function displaySkillMenu(selected) {
    switch(selected){
      case null:
        return <div id='noSelectedSkill'>Welcome</div>;
      case 'shop':
        return <Shop />;
      case 'bank':
        return <Bank />;
      case 'combat':
        return <Combat />;
      case 'woodcutting':
        return <Woodcutting state={state} dispatch={dispatch} selectedAction={selectedAction} setSelectedAction={setSelectedAction}/>;
      case 'fishing':
        return <Fishing />;
      case 'firemaking':
        return <Firemaking />;
      case 'cooking':
        return <Cooking />;
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

  // set global interval for action
  useEffect(() => {
    let action;
    if (selectedAction === null) clearInterval(action);
    else {
      action = setInterval(() => {
        if (selectedAction.includes('Log')) {
          cutWood(selectedAction, state, dispatch)
        }
      }, actionTimeValues[selectedAction])
    } 
    return () => clearInterval(action);
  }, [selectedAction])

  return (
    <div className="Game">
      <Header user={user} deleteAllCookies={deleteAllCookies} navigate={navigate}></Header>
      <main>
        <div className='mainGrid'>
          <div className='sidebar'>
            <div className='sidebarItem'><button className='skillBtn'><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/main/gp.svg'></img><p>Shop</p></div><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/main/coins.svg'></img><p>{state.userObj ? state.userObj.gold + 'g' : null}</p></div></button></div>
            <div className='sidebarItem'><button className='skillBtn'><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg'></img><p>Bank</p></div>{state.userObj ? state.userObj.bankSpace + '/' + state.userObj.maxBankSpace : null}</button></div>
            <ul className='skillList'>
              <li className='sidebarLabel'>Combat</li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('combat')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/combat/hitpoints.svg'></img><p>Constitution</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.constitution.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('combat')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/combat/attack.svg'></img><p>Attack</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.attack.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('combat')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/combat/strength.svg'></img><p>Strength</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.strength.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('combat')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/combat/defence.svg'></img><p>Defence</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.defence.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('combat')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/ranged/ranged.svg'></img><p>Archery</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.archery.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('combat')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/magic/magic.svg'></img><p>Arcana</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.arcana.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('combat')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/prayer/prayer.svg'></img><p>Divinity</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.divinity.current + '/99': null}</button></li>
              <li className='sidebarLabel'>Skills</li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('woodcutting')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/woodcutting.svg'></img><p>Woodcutting</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.woodcutting.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('fishing')}}><div className='flexGrouper'><img className='sidebarIcon' src='https://cdn.melvor.net/core/v018/assets/media/skills/fishing/fishing.svg'></img><p>Fishing</p></div>{state.userObj && state.userObj.levels ? state.userObj.levels.fishing.current + '/99': null}</button></li>
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
