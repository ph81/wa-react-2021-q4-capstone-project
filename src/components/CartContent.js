import React from "react";
import { useCartContext } from "../context/CartContext";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { Link } from "react-router-dom";
import styles from "../styles/CartContent.module.css";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <section data-testid="cart-content">
      <h2>Your cart</h2>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className={styles["cart__container"]}>
        <Link to="/products" className={styles["cart__buttons"]}>
          continue shopping
        </Link>
        <button
          type="button"
          className={styles["clear__btn"]}
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};

export default CartContent;


