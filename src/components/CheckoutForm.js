import React from "react";
import CartContent from "./CartContent";
import StripeCheckout from './StripeCheckout'
//import { Link } from 'react-router-dom';
import styles from "../styles/CheckoutForm.module.css";

const CheckoutForm = () => {
  return (
    <section>
      <div className={styles["user__info"]}>
        <h2>Billing info</h2>
        <form>
          <label>
            First name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last name:
            <input type="text" required />
          </label>
          <label>
            Address:
            <input type="text" required />
          </label>
          <label>
            City/State:
            <input type="text" required />
          </label>
          <label>
            Country:
            <input type="text" required />
          </label>
          <label>
            Zip code:
            <input type="text" required />
          </label>
          <label>
            Order notes:
            <textarea rows="5" cols="33" />
          </label>
          <button type="submit">Proceed to checkout</button>
        </form>
      </div>
      <CartContent />
      <StripeCheckout />
    </section>
  );
};

export default CheckoutForm;
