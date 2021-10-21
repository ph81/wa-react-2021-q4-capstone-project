import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const Header = () => {

    // Setting up menu logic
    const [isMenuActive, setMenuActive] = useState(false);
    console.log(isMenuActive);

    const ToggleMenu = () => {
      setMenuActive(true); 
     };




    return (
        <>
            <nav>
            <div className={styles["menu-icon"]}>
                <span><FaBars onClick={ToggleMenu} /></span>
            </div>
            <div className={styles.logo}>
                NAKAMA
            </div>
            <div className={styles["nav-items"]}>
          
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#collection">New Collection</a></li>
                    <li><a href="/allproducts">All our products</a></li>

            </div>
            <div className={styles["search-icon"]}>
                <span><FaSearch  /></span>
            </div>
            <div className={styles["cancel-icon"]}>
                <span><FaTimes  /></span>
            </div>
            <form action="#">
                <input type="search" className={styles["search-data"]} placeholder="Search" required />
                <button type="submit"><FaSearch/></button>
            </form>

            <div className={styles["fixed-icon"]}>
                <span><FaShoppingCart/></span>
            </div>
            <div className={styles["fixed-icon"]}>
                <span><FaUserAlt/> </span>
            </div>
            
        </nav>
        </>
    )
}

export default Header;