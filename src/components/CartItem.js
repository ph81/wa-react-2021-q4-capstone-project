import React from 'react';
import { useCartContext } from '../context/CartContext';
//import {formatPrice} from '../utils/helpers';
import QuantityBtn from './QuantityBtn';
import { FiTrash } from 'react-icons/fi';
import styles from '../styles/CartItem.module.css';
import { Link } from 'react-router-dom';

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
     <section>
       <article className={styles["cart__item"]}>
      <div className={styles.title}>
        <img src={image} alt={name} />
        <div>
          <Link to={`/products/${id}`}>
          <h4 className={styles.name}>{name}</h4>
          </Link>
        </div>
      </div>
      <h4 className={styles.price}>${price}</h4>
      <h4 className={styles["price__small"]}>${price}</h4>
      <h4>
      <QuantityBtn amount={amount} increase={increase} decrease={decrease} 
      className={styles["quantity__item"]} />
      </h4>
      <h4 className={styles.subtotal}>{(price * amount)}</h4>
      <button type='button' className={styles["remove__btn"]} onClick={() => removeItem(id)}>
        <FiTrash />
      </button>
      </article>
     </section>
  )
}

export default CartItem;