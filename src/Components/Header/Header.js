import React from 'react'
import {Link} from 'react-router-dom'
import { FaHouseUser } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import './Header.scss'
const Header = () => {
  return (
    <div className ='header'>
        <Link to ='/'>
        <div className='logo'><FaHouseUser/> MovieApp</div>
        </Link>
        <div className='user-image'>
            <span> 
            <IoPersonCircleSharp size='2rem' color='white'/></span></div>
        
    </div>
  )
}

export default Header