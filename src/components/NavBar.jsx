import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <h1>TeenyTinyWeather</h1>
        <ul>
        <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="about">About</NavLink>
            </li>
        </ul>
    </nav>
  )
}
