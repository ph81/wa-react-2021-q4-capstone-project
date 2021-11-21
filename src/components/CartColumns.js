import React from "react";
import styles from "../styles/CartColumns.module.css";

const CartColumns = () => {
  return (
    <div className={styles["cart__columns"]}>
      <div className={styles["cart__content"]}>
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Subtotal</h4>
        <span></span>
      </div>
      <hr />
    </div>
  );
};

export default CartColumns;
