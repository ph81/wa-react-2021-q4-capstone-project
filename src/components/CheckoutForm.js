import React from 'react';
//import { useCartContext } from '../context/CartContext';
import CartContent from './CartContent';
//import { Link } from 'react-router-dom';
import styles from '../styles/CheckoutForm.module.css';

const CheckoutForm = () => {
   //const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
   //const history = useHistory();

   return (
      <section>
         <div className={styles["user__info"]}>
            <h2>Billing address</h2>
            <form>
               <label>First name:
                  <input type="text" name="firstName"  required />
               </label>
               <label>Last name:
                  <input type="text"  required />
               </label>
               <label>Address:
                  <input type="text"  required />
               </label>
               <label>City/State:
                  <input type="text"  required />
               </label>
               <label>Country:
                  <input type="text"  required />
               </label>
               <label>Zip code:
                  <input type="text"  required />
               </label>
               <label>Order notes:
                  <textarea rows="5" cols="33"  />
               </label>
               <button type="submit">Save my info</button>
            </form>
         </div>
         <CartContent />
      </section>
   )
}

export default CheckoutForm;