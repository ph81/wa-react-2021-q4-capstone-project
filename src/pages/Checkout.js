import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styles from '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartContent from '../components/CartContent';
import PageWrapper from '../components/PageWrapper';


const Checkout = () => {
   const { cart } = useCartContext();

   return (
      <>
    <Header />
    <div className={styles.container}>
      <main> 
         <PageWrapper />
         {cart.length < 1 ?
            (
            <div>
               <h2>Your cart is empty</h2>
               <Link to='/products'>
                 Go Shopping
               </Link>
            </div>  
            )
            : ""
         }
         <CartContent />

      </main>
      <Footer />
    </div>
    </>
   )
}

export default Checkout;