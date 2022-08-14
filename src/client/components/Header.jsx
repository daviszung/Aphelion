import { deleteAllCookies } from './App.jsx'


export function Header (props) {
  return (
    <header>
        <h1 className='gameTitle'>Idle Game Title</h1>
        <nav className='navbar'>
          <ul className='navlist'>
            <li>{props.user}</li>
            <button className='logoutBtn' onClick={deleteAllCookies}>Logout</button>
          </ul>
        </nav>
      </header>
  )
}