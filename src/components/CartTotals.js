import React from "react";
import { useCartContext } from "../context/CartContext";
import PropTypes from "prop-types";
//import { formatPrice } from '../utils/helpers';
import { Link } from "react-router-dom";
import styles from "../styles/CartTotals.module.css";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <section className={styles["cart__totals"]}>
      <article>
        <h5>
          Subtotal: <span>$ {total_amount}</span>
        </h5>
        <p>
          Shipping fee: <span>$ {shipping_fee}</span>
        </p>
        <hr />
        <h4>
          Order total: <span>$ {total_amount + shipping_fee}</span>
        </h4>
      </article>
      <Link to="/checkout" className={styles["cart__checkout"]}>
        Proceed to checkout
      </Link>
    </section>
  );
};

export default CartTotals;

CartTotals.propTypes = {
  total_amount: PropTypes.number,
  shipping_fee: PropTypes.number,
};
