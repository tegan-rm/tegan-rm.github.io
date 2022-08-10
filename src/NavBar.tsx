import React from 'react';
import styles from './Nav.module.css';
import logo from './Pictures/logo.png';
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <div className={styles.navbar} >
        
            <img src={logo} alt="logo" width="100" height="100" />
            <div className={styles['logo-container']}>
                <span>Tegan Roberts-Morgan</span>
            </div>
            <nav className={styles['links-container']}>
                <div className={styles['link']}>
                <Link to={"/"}>Home</Link> 
                </div>
                <div className={styles['link']}>
                <Link to={"/about"}>About</Link>
                </div>
                <div className={styles['link']}>
                <Link to={"/contact"}>Contact</Link>
                </div>
                <div className={styles['link']}>
                <Link to={"/projects"}>Projects</Link>
                </div>
                
        </nav>
        </div>
    
)}

export default NavBar;