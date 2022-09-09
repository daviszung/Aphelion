import style from '../stylesheets/Header.module.css'
import { useState, useEffect } from 'react'
import { updateUserInDB } from './Game';

const themes = {
  shop: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/main/gp.svg',
    bgColor: '#febb33',
  },
  bank: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg',
    bgColor: '#b57e3b',
  },
  combat: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/combat/combat.svg',
    bgColor: '#9b0000',
  },
  woodcutting: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/woodcutting.svg',
    bgColor: '#137359'
  },
  fishing: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/fishing/fishing.svg',
    bgColor: '#92d0f1'
  },
  firemaking: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/firemaking/firemaking.svg',
    bgColor: '#b46624'
  },
  cooking: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/cooking/cooking.svg',
    bgColor: '#c2b6b8'
  },
  mining: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/mining/mining.svg',
    bgColor: '#94857a'
  },
  smithing: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/smithing/smithing.svg',
    bgColor: '#69686f'
  },
  thieving: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/thieving/thieving.svg',
    bgColor: '#465a61'
  },
  fletching: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/fletching/fletching.svg',
    bgColor: '#e77575'
  },
  crafting: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/crafting/crafting.svg',
    bgColor: '#d19664'
  },
  runecrafting: {
    img: 'https://cdn.melvor.net/core/v018/assets/media/skills/runecrafting/runecrafting.svg',
    bgColor: '#9a8240'
  },
  
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function Header (props) {
  const [loggedIn, setLoggedIn] = useState(true)

  // logout
  useEffect(() => {
    if (!loggedIn) props.navigate('/')
  }, [loggedIn])

  return (
    <header style={{background: `${props.selectedSkill ? themes[props.selectedSkill].bgColor : '#343c4b'}`}}>
        <div className={style.flexGrouper} style={{width: '10%'}}><img className={style.headerImg} src={props.selectedSkill ? themes[props.selectedSkill].img: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='}></img><div className={style.skillMenuTitle}>{props.selectedSkill ? capitalize(props.selectedSkill) : ''}</div></div>
        <h1 className={style.gameTitle}>Aphelion Idle</h1>
        <nav>
          <ul className={style.navlist}>
            <li>{props.user}</li>
            <button className={style.logoutBtn}
            onClick={() => {
              // save the game and delete cookies
              const body = JSON.stringify(props.stateRef.current)
              updateUserInDB(body)
              props.deleteAllCookies()
              setLoggedIn(false)
            }}>Logout</button>
          </ul>
        </nav>
      </header>
  )
}