import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { FiMenu, FiX, FiSearch, FiUserMinus, FiUserPlus } from "react-icons/fi";
import CartBtn from "./CartBtn";
import { useHistory } from "react-router-dom";
import { useUserContext } from '../context/UserContext'
import cx from "classnames";

const Header = () => {

  const { loginWithRedirect, myUser, logout } = useUserContext();
  // Setting up menu logic
  const [isMenuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  let history = useHistory();

  const ToggleMenu = () => {
    setMenuActive(true);
  };

  const ToggleCancel = () => {
    setMenuActive(false);
  };

  const ToggleSearch = () => {
    setSearchActive(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      history.push(`/search?q=${searchTerm}`);
    }
  };

  return (
    <>
      <nav>
        <div
          className={cx(
            styles["menu-icon"],
            isMenuActive ? styles["hide"] : ""
          )}
        >
          <span>
            <FiMenu onClick={ToggleMenu} />
          </span>
        </div>
        <div className={styles.logo}>
          <a href="/">NAKAMA</a>
        </div>
        <div
          className={cx(
            styles["nav-items"],
            isMenuActive ? styles["nav-items-active"] : ""
          )}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#collection">New Collection</a>
          </li>
          <li>
            <a href="/products">Our products</a>
          </li>
        </div>
        <div className={cx(styles["search-icon"])}>
          <span>
            <FiSearch onClick={ToggleSearch} />
          </span>
        </div>
        <div
          className={cx(
            styles["cancel-icon"],
            isMenuActive ? styles["show"] : styles["hide"]
          )}
        >
          <span>
            <FiX onClick={ToggleCancel} />
          </span>
        </div>
        <form
          action="#"
          onSubmit={handleSearchSubmit}
          className={cx(searchActive ? styles["form-active"] : "")}
        >
          <input
            type="search"
            value={searchTerm}
            className={styles["search-data"]}
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button type="submit">
            <FiSearch />
          </button>
        </form>
        <div
          className={isMenuActive ? styles["hide-icon"] : styles["fixed-icon"]}
        >
          <span>
          {myUser ? (
          
          <FiUserMinus onClick={() => {
            logout({ returnTo: window.location.origin });
          }} />
          ) : (
          <FiUserPlus onClick={loginWithRedirect} />
          )}
          </span>
        </div>
        <div
          className={isMenuActive ? styles["hide-icon"] : styles["fixed-icon"]}
        >
          <span>
            <CartBtn />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
