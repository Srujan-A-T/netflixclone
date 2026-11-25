import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import dropdown_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Laanguages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search_icon"  className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon"  className='icons'/>
        <div className="navbar-profile">
        <img src={profile_icon} alt="profile_icon"  className='profile'/>
        <img src={dropdown_icon} alt="dropdown_icon" />
        <div className="dropdown">
          <p>Sign out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}
import "./Navbar.css"

export default Navbar 
