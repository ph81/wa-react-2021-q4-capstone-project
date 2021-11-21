import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles/CartBtn.module.css";

const CartBtn = () => {
  const { total_items } = useCartContext();

  return (
    <div className={styles["cart__btn__wrapper"]}>
      <Link to="/cart" className={styles["cart__btn"]}>
        <span className={styles["cart__container"]}>
          <FiShoppingCart />
          <span className={styles["cart__value"]}>{total_items}</span>
        </span>
      </Link>
    </div>
  );
};

export default CartBtn;

CartBtn.propTypes = {
  total_items: PropTypes.number,
};
