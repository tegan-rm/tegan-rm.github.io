import React from 'react';
import './NavBarCSS.css';
import logo from './Pictures/Logo.png';
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <div className='navbar' >              
            <img src={logo} alt="logo" className='logoImage' />
            <div className ="navbarText">
                <div className='logoText'>
                    <span>Tegan Roberts-Morgan</span>
                </div>
                <nav className='linksContainer'>
                    <div className='link'>
                        <Link to={"/"}>Home</Link> 
                    </div>
                    <div className='link'>
                        <Link to={"/about"}>About</Link>
                    </div>
                    <div className='link'>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <div className='link'>
                        <Link to={"/projects"}>Projects</Link>
                    </div>                
                </nav>
             </div>
        </div>
    
)}

export default NavBar;