import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <h1>TinyWeather</h1>
        <ul>
        <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="myweather">My Weather</NavLink>
            </li>
        </ul>
    </nav>
  )
}
