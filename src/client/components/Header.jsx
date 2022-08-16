import { useState, useEffect } from 'react'


export function Header (props) {
  const [loggedIn, setLoggedIn] = useState(true)

  // logout
  useEffect(() => {
    if (!loggedIn) props.navigate('/')
  }, [loggedIn])

  return (
    <header>
        <h1 className='gameTitle'>Idle Game Title</h1>
        <nav className='navbar'>
          <ul className='navlist'>
            <li>{props.user}</li>
            <button className='logoutBtn' onClick={() => {
              props.deleteAllCookies()
              setLoggedIn(false)
            }}>Logout</button>
          </ul>
        </nav>
      </header>
  )
}