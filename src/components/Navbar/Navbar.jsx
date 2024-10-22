import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/OIP (6).jpeg'
import bellicon from '../../assets/bell_icon.svg'
import profileicon from '../../assets/profile_img.png'
import searchicon from '../../assets/white-search-icon-transparent-background-1.jpg'
import dropdown from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
const Navbar = () => {
  const navRef = useRef();
  useEffect (()=> {
   window.addEventListener('scroll' , ()=> {
    if(window.scrollY  >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
   })
  },[])
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
      <img src={searchicon} className='icons'/>
        <p>Children</p>
        <img src={bellicon} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={profileicon} alt="" className='icons'/>
          <img src={dropdown} alt="" className='icons'/>
          <div className='drowpdown'>
            <p onClick={() => {logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
