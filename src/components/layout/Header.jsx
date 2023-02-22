import React from 'react'
import {logOut} from '../../store/slices/nameTrainer.slice'
import { useDispatch } from 'react-redux'
import "../../components/styles/Header.css"
import { NavLink } from 'react-router-dom'
import { resetTheme } from '../../store/slices/theme.slice'

const Header = () => {

    const dispatch = useDispatch()
    const handleClickLogOut =() => {
        dispatch(logOut())
        dispatch(resetTheme())
    }

  return (
    <header className='header'>
        <div className='header__red'>
            <div className='header__img'>
                <img src="/images/pokedex.png" alt="" />
            </div>
        </div>
        <div className='header__black'>
                <nav className='navbar'>
                
                <NavLink className={({isActive}) => isActive ? "link-active" : "link-normal"} to="/pokedex/">Pokedex</NavLink>
                <NavLink className={({isActive}) => isActive ? "link-active" : "link-normal"} to="/config">Config</NavLink>
                </nav>
            <div className='header__pokeball'>

                <button className='header__btn' onClick={handleClickLogOut}>X</button>
            </div>
        </div>
    </header>
  )
}

export default Header