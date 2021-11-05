import React from 'react';
import styles from '../styles/CartColumns.module.css';

const CartColumns = () => {
  return (
    <div className={styles["cart__columns"]}>
      <div className={styles["cart__content"]}>
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span></span>
      </div>
      <hr />
    </div>
  )
}

export default CartColumns;