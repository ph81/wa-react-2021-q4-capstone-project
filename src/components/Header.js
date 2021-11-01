import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import cx from 'classnames';

const Header = () => {

    // Setting up menu logic
    const [isMenuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const ToggleMenu = () => {
      setMenuActive(true); 
     };

    const ToggleCancel = () => {
      setMenuActive(false); 
    }

    const ToggleSearch = () => {
        setSearchActive(true);
    }

    const handleSearch = (e) => {
        console.log(e.target.value);
        console.log(searchTerm);
    }


    return (
        <>
            <nav>
            <div className={cx(styles["menu-icon"], 
                            isMenuActive ? styles["hide"] : "") 
                            }>
                <span><FaBars onClick={ToggleMenu} /></span>
            </div>
            <div className={styles.logo}>
                <a href="/">NAKAMA</a>
            </div>
            <div className={cx(styles["nav-items"], 
                            isMenuActive ? styles["nav-items-active"] : ""
                            )}>
          
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#collection">New Collection</a></li>
                    <li><a href="/products">Our products</a></li>

            </div>
            <div className={cx(styles["search-icon"]
                           
                
                            )}>
                <span><FaSearch onClick={ToggleSearch} /></span>
            </div>
            <div className={cx(styles["cancel-icon"], 
                            isMenuActive ? styles["show"] : styles["hide"]
                            )}>
                <span><FaTimes onClick={ToggleCancel}  /></span>
            </div>
            <form action="#" onSubmit={handleSearch}
                className={cx(searchActive ? styles["form-active"] : "")}>
                <input type="search" value={searchTerm} className={styles["search-data"]} 
                placeholder="Search" onChange={e => setSearchTerm(e.target.value)} required />
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