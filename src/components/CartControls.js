import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles/CartControls.module.css";

const CartControls = () => {
  const { total_items, clearCart } = useCartContext();

  return (
    <div className={styles["cart__controls"]}>
      <Link to="/cart" className={styles["cart-btn"]}>
        Cart
        <span className={styles["cart__container"]}>
          <FiShoppingCart />
          <span className={styles["cart__value"]}>{total_items}</span>
        </span>
      </Link>
      <button
        type="button"
        className={styles["cart__btn"]}
        onClick={() => {
          clearCart();
        }}
      ></button>
    </div>
  );
};

export default CartControls;
