import '../stylesheets/Game.css'
import { useState, useEffect, useReducer } from 'react'
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

const reducer = (state, action) => {
  switch(action.type) {
    case 'Initial':
      return {...state, userObj: action.obj}
    case 'Normal Log':
      console.log(state)
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
  // const [userObj, setUserObj] = useState( async () => {
  //   return await getUserObject()
  // });

  const [state, dispatch] = useReducer(reducer, {selectedSkill: 'woodcutting'})
  const [selectedSkill, setSelectedSkill] = useState('woodcutting');

  // functions
  function displaySkillMenu(selected) {
    if (selected === 'woodcutting') {
      return (<Woodcutting state={state} dispatch={dispatch} />)
    } else if (selected === 'fishing') {
      return (<Fishing/>)
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
    // setUserObj(response["userObject"])
    dispatch({type: 'Initial', obj: response.userObject}) 
    return response.userObject;
  }
  
  useEffect(() => {
    getUserObject()
  }, [])


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

  // test for later
  useEffect(() => {
    console.log('any rerender of game')
    console.log(state)
    // console.log('in the game component: ', userObj)
  })



  return (
    <div className="Game">
      <Header user={user} deleteAllCookies={deleteAllCookies} navigate={navigate}></Header>
      <main>
        <div className='mainGrid'>
          <div className='sidebar'>
            <div className='sidebarItem'><button className='skillBtn'><p>Shop</p>{state && state.userObj ? state.userObj.gold + 'g' : null}</button></div>
            <div className='sidebarItem'><button className='skillBtn'><p>Bank</p>{state && state.userObj ? state.userObj.bankSpace + '/' + state.userObj.maxBankSpace : null}</button></div>
            <ul className='skillList'>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('woodcutting')}}><p>Woodcutting</p>{state.userObj && state.userObj.levels ? state.userObj.levels.woodcutting.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('fishing')}}><p>Fishing</p>{state.userObj && state.userObj.levels ? state.userObj.levels.fishing.current + '/99': null}</button></li>
              {/* <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('firemaking')}}><p>Firemaking</p>{userObj && userObj.levels ?  userObj.levels.firemaking.current + '/99': null}</button></li>
              <li className='sidebarItem'><button className='skillBtn' onClick={() => {setSelectedSkill('cooking')}}><p>Cooking</p>{userObj && userObj.levels ?  userObj.levels.cooking.current + '/99': null}</button></li> */}
            </ul>
          </div>
          {displaySkillMenu(selectedSkill)}
        </div>
      </main>
    </div>
  )
}

export default Game;