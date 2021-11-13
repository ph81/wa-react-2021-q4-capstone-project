import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutForm from "../components/CheckoutForm";
import PageWrapper from "../components/PageWrapper";

const Checkout = () => {
  const { cart } = useCartContext();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <PageWrapper name="Checkout" />
          {cart.length < 1 ? (
            <div className={styles.container}>
              <h2>Your cart is empty</h2>
              <Link to="/products">Go Shopping</Link>
            </div>
          ) : (
            ""
          )}
          <CheckoutForm />
        </main>
       
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
